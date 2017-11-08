// this is the event listener for the button on the chrome browser
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: "index.html"}, function(newtab){
    // Check to see if I'm accessing the right tab
    console.log(tab.id);
    // send a message to the content script (getHighlighited.js) that gets highlighted text
    chrome.tabs.sendMessage(tab.id, {todo: "Give me something"}, function(highlighted){
      chrome.tabs.sendMessage(newtab.id, {highlighted}, function(reply){
      })

    })

  })
  // this should make the event listener act asynchronously so the new tab
  // doesn't break because of events happening in the wrong order
  return true
})
