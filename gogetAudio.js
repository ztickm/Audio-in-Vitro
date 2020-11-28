function launchScript(){


  try {

css = '.ztk-hovered-element {' +
         'background-color: #e5e5e5;' +
         'outline: 1px dashed red; !important' +
         'outline-offset: -10px; !important' +
	'}';

    chrome.tabs.insertCSS({
      code: css
    });
    
  }
  catch(e) {
    console.log(`Error: ${e}`);
  }
  
  chrome.tabs.executeScript({
    file: "execute.js"
  });
}


chrome.browserAction.onClicked.addListener(launchScript);
