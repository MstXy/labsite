var prevScrollPos = window.pageYOffset;
var navbar = document.querySelector('.navbar');
var scrollThreshold = 50; // Adjust the threshold value as desired

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var scrollDifference = Math.abs(currentScrollPos - prevScrollPos);

  if (scrollDifference > scrollThreshold) {
    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove('navbar-hidden');
    } else {
      navbar.classList.add('navbar-hidden');
    }
  
    prevScrollPos = currentScrollPos;
  }
});

