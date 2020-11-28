function download( url, filename ) {
    var link = document.createElement('a');
    link.setAttribute('href',url);
    link.setAttribute('download',filename);
    link.click()
}

// Here get add event listner to add hover class

document.addEventListener('mouseover', function mouseEnter (e) {
  console.log ("You are in ", e.target.tagName);
  e.target.classList.add("ztk-hovered-element"); 
});

document.addEventListener('mouseout', function mouseLeave (e) {
  console.log ("You left ", e.target.tagName);
  e.target.classList.remove("ztk-hovered-element");
});

document.addEventListner('click', function (e){
  e.preventDefault();
  let path = e.target.src;
  let path_arr = path.split('.');
  let ext = path_arr.pop();

  let filename = path_arr.join('.').split('/').pop();
  console.log('Clicked:', filename, ext);
  download(e.target.src, filename + '.' + ext);

});
