console.log("background.js loaded")

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "content.js" });
});
