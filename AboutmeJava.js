let elementAbout = document.getElementById('darkmodeAbout');
let nav = document.getElementsByClassName('navbar')[0]
let navText = document.querySelectorAll('.navbar li a')
let isDarkModeAbout = false;
function toggleModeAbout() {
    if (!isDarkModeAbout) {
        darkAbout()
    } else {
        lightAbout()
    }
}
function darkAbout() {
    elementAbout.style.backgroundColor = '#252526';
    elementAbout.style.color = '#f9f9f9'
    elementAbout.innerHTML = 'Light Mode'
    document.body.style.backgroundColor = '#252526'
    nav.style.backgroundColor ='#252526'
    document.body.style.color = '#f9f9f9'
    navText.forEach(function(anchor) {
        anchor.style.color = '#f9f9f9'
    })
    isDarkModeAbout = true;
}
function clickedAbout() {
    elementAbout.style.backgroundColor = 'purple'
    elementAbout.style.color = 'white'
}
function lightAbout() {
    elementAbout.style.backgroundColor = 'white';
    elementAbout.style.color = 'black';
    elementAbout.innerHTML = 'Dark Mode';
    document.body.style.backgroundColor = '';
    nav.style.backgroundColor = '';
    document.body.style.color = '';
    navText.forEach(function(anchor) {
        anchor.style.color = '';
    });
    isDarkModeAbout = false;
}
elementAbout.onmousedown = clickedAbout;
elementAbout.onclick = toggleModeAbout;