# Media-in-Vitro
A web extension that downloads html media files (anything that has an src attribute) present in the current page
The extension isn't signed or packaged yet. It has been tested on firefox dev edition.
## Installation for debugging/testing purposes 
### Firefox

1. Type `about:debugging` in your address bar
2. Click "This Firefox" 
3. Click "Load Temporary Add-on"
4. Select any file in the extension's directory (I like to select the manifest.json file)
### Chrome
1. Type `chrome://extensions` in your address bar.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the LOAD UNPACKED button and select the extension directory.
4. Select any file in the extension's directory (I like to select the manifest.json file)
## Usage
For now, clicking the extension icon will trigger a script that adds an overlay over elements that are under the mouse cursor, clicking an element will trigger a script that downloads whatever is at the `src`
