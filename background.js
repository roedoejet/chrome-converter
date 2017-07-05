
// this is the event listener for the button on the chrome browser
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({}, function(newtab){
    // Check to see if I'm accessing the right tab
    console.log(tab.id)
    // send a message to the content script that gets highlighted text
    chrome.tabs.sendMessage(tab.id, {todo: "Give me something"}, function(highlighted){
      

    })

  }
}
