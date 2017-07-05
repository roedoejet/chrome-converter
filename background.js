
// this is the event listener for the button on the chrome browser
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({}, function(newtab){
    // Check to see if I'm accessing the right tab
    console.log(tab.id)
    // send a message to the content script (getHighlighited.js) that gets highlighted text
    chrome.tabs.sendMessage(tab.id, {todo: "Give me something"}, function(highlighted){
      return sendhighlighted({highlighted: highlighted})
          .then((response) => {
            console.log(response)
            chrome.tabs.sendMessage(newtab.id, {response, highlighted}, function(reply){
            })
        })

    })

  }
}
