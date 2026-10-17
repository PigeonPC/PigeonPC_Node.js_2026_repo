console.log("hello");

const currentYear = new Date().getFullYear();

const copyrightFooterP = document.getElementById('footer-copyright');

copyrightFooterP.textContent = "© " + currentYear;