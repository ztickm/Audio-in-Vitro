# Audio-in-Vitro
A web extension that downloads html5 audio files present in the current page
The extension isn't signed or packaged yet. It has been tested on firefox dev edition.
## Installation for debugging/testing purposes 
### Firefox
You can Audio in Vitro using the `about:debugging` page:
1. Type `about:debugging` in your adress bar
2. Click "This Firefox" 
3. Click "Load Temporary Add-on"
4. Select any file in the extension's directory (I like to select the manifest.json file)
## Usage
For now, clicking the extension icon will trigger a script that looks for an HTML element with `audiosource` as an id
and will trigger a download for its audio blob to a file named 'Audio-In-Vitro.mpga'. I'm working on making the id and file name to be configurable.
