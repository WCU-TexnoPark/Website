// For Fun
let titlee = document.title;
window.addEventListener("blur", () => {
    document.title = "TexnoParka geri dön :(";
});
window.addEventListener("focus", () => {
    document.title = titlee;
});

// Navbar Logo Width for dordbucaq
let navbarLogo = document.querySelector('.navbar-texno-logo');
let navbarLogoHeight = navbarLogo.clientHeight;
navbarLogo.style.width = navbarLogoHeight + 'px';


// TexnoPark text font size
window.addEventListener('resize', function() {
    let texnoParkTextFirstPage = document.getElementsByClassName('first-screen-header');
    let pageMaxWidth = 600;
    let width = window.innerWidth;
    for (let i = 0; i < texnoParkTextFirstPage.length; i++) {
      let currentFontSize = parseInt(window.getComputedStyle(texnoParkTextFirstPage[i]).getPropertyValue('font-size'));
      let newFontSize = (width <= pageMaxWidth) ? currentFontSize * (width / pageMaxWidth) : currentFontSize;
      texnoParkTextFirstPage[i].style.fontSize = newFontSize + 'px';
    }
  });
  