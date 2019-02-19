Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});

function onScroll() {
  var navbar = undefined;
  if (document.getElementById('navbar')) {
    navbar = document.getElementById('navbar').classList;
  } else if (document.getElementById('navbar-home')) {
    navbar = document.getElementById('navbar-home').classList;
  }
  // var navbar = document.getElementById("navbar-home").classList;
  var scroll = window.pageYOffset;

  // I don't need sticky navbar on Phone
  if (!navbar.contains('post'))
    if (scroll > 200 && window.innerWidth > 600) {
      navbar.add('sticky');
    } else if (navbar.contains('sticky')) {
      navbar.remove('sticky');
    }

  if (
    navbar.contains('post') &&
    scroll > document.getElementsByClassName('post-header')[0].clientHeight
  ) {
    console.log('screen height: ' + screen.height + '\n scroll: ' + scroll);
    navbar.add('sticky');
    document.querySelector('.post').style.animation =
      'fadeIn ease 0.3s 0s forwards';
    // document.querySelector('.post').style.opacity = 1;
    document.querySelector('.post').style.transform = 'none';
  } else if (navbar.contains('post') && scroll < screen.height) {
    navbar.remove('sticky');
  }
}
