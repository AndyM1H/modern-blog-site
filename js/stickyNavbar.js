Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});

function makeNavbarOpacity() {
  var navbar = document.getElementById('navbar').classList;
  var scroll = window.pageYOffset;

  // I don't need sticky navbar on Phone
  if (scroll > 338 && window.innerWidth > 600) {
    navbar.add('sticky');
  } else if (navbar.contains('sticky')) {
    navbar.remove('sticky');
  }
}
