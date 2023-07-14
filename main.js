//Show/Hide navbar
let collapse = collapse navbar-collapse;
let nav= nav;
function toggleHide(){
  if(document.getElementsByClassName('nav navbar-nav') .style.display == 'block'){
    document.getElementsByClassName('nav navbar-nav') .style.display = 'none';
  }else{
    document.getElementsByClassName('nav navbar-nav') .style.display == 'block';
  }
}
document.getElementsByClassName('nav navbar-nav') .addEventListener('click', toggleHide());