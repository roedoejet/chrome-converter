$('document').ready(function(){
  // This function will receive the highlighted text from background.js
  chrome.runtime.onMessage.addListener(function(request, response, sendResponse) {
    console.log(request);

  }
}
