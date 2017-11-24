// this is pretty boilerplate right now, It could use some customization
// save the language option into chrom storagee
function save_options(){

  let language = document.getElementById('language')
  chrome.storage.sync.set({
    selectedLanguage: language
  }, function() {
    let status = document.getElementById('status');
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
