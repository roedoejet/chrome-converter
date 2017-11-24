// this is pretty boilerplate right now, It could use some customization
// save the language option into chrome storagee
console.log("options.js loaded")
function save_options(){
  var language = document.getElementById('language').value;
  chrome.storage.sync.set({
    selectedLanguage: language
  }, function() {
    console.log("sucessfully set option")
    var status = document.getElementById('status');
    status.textContent = "Language Saved";
  })
}

// load the language option from chrome storage
function retrieve_options(){
  chrome.storage.sync.get({
    selectedLanguage: 'A',
  }, function(items){
    document.getElementById('language').value = items.selectedLanguage;
  })
}

document.addEventListener('DomContentLoaded', retrieve_options);
document.getElementById('save').addEventListener('click', save_options);
