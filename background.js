// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    if (request.totalPerTaux) {
        // Send a message to content.js with the selected declaration ID
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { totalPerTaux: request.totalPerTaux });
        });
    }
});
