function launchScript(){

    browser.tabs.executeScript({
	file: "execute.js"
    })
}
let audioSourceElm;
browser.browserAction.onClicked.addListener(launchScript);
