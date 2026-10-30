// task add to the footer so that it says ©2026 right now but always the current year

const year = new Date().getFullYear();

const copyrightFooterP = document.getElementById('footer-copyright');

copyrightFooterP.textContent = "© " + year;