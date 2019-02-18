Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});

function makeNavbarOpacity() {
  var navbar = document.getElementById('navbar').classList;
  var scroll = window.pageYOffset;

  // I don't need sticky navbar on Phone
  if (!navbar.contains('post'))
    if (scroll > 338 && window.innerWidth > 600) {
      navbar.add('sticky');
    } else if (navbar.contains('sticky')) {
      navbar.remove('sticky');
    }

  if (navbar.contains('post') && scroll > screen.height) {
    navbar.add('sticky');
    document.querySelector('.post').style.animation =
      'fadeIn ease 0.3s 0.1s forwards';
    // document.querySelector('.post').style.opacity = 1;
    document.querySelector('.post').style.transform = 'none';
  } else if (navbar.contains('post') && scroll < screen.height) {
    navbar.remove('sticky');
  }
}
