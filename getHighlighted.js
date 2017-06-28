// this file affects the dom of the active tab
// when the extension button is clicked


// This function gets whatever text is highlighted when the button is clicked
function getSelectionText() {
  let text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

// this listens for a message from background.js,
// then sends the highlighted text back with sendResponse
chrome.runtime.onMessage.addListener(function(request, response, sendResponse){
  console.log("fired", request)
  let highlighted = getSelectionText();
    sendResponse({phrase: highlighted});
})
