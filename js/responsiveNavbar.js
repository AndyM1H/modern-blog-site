function showNavMenu() {
  var x = document.getElementById('navbar');
  if (!x.classList.contains('responsive')) {
    x.classList.add('responsive');
  } else {
    x.classList.remove('responsive');
  }
}
