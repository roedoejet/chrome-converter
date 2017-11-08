// This file affects the DOM of the newly created page
document.addEventListener('DOMContentLoaded', function(event){
  // This function will receive the highlighted text from background.js
  chrome.runtime.onMessage.addListener(function(request, response, sendResponse) {
    console.log(request.highlighted.phrase);
    document.getElementById("main").innerHTML = request.highlighted.phrase; 
  })
})
