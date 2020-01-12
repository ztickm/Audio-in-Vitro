function download( url, filename ) {
    var link = document.createElement('a');
    link.setAttribute('href',url);
    link.setAttribute('download',filename);
    link.click()
}
audioSourceElm = document.getElementById('audiosource');
download(audioSourceElm.src, 'Audio-In-Vitro.mpga');
