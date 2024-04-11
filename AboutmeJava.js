let elementAbout = document.getElementById('darkmodeAbout');
let lennyParagraphs = document.querySelectorAll('.Lenny p');
let nav = document.getElementsByClassName('navbar')[0]
let navText = document.querySelectorAll('.navbar li a')
let skills = document.querySelectorAll('.skills li')
let getInTouch = document.querySelectorAll('.get-in-touch ul')
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
    lennyParagraphs.forEach(function(paragraph) {
        paragraph.style.backgroundColor = '#252526';
        paragraph.style.color = '#f9f9f9';
        paragraph.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
    });
    skills.forEach(function(skill) {
        skill.style.backgroundColor = '#252526'
        skill.style.color = '#f9f9f9'
        skill.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
    } );
    getInTouch.forEach(function(Touch) {
        Touch.style.backgroundColor = '#252526'
        Touch.style.color = '#f9f9f9'
        Touch.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
    })
    elementAbout.innerHTML = 'Light Mode'
    document.body.style.backgroundImage =  'url(Resources/GoogleDark.png)'
    nav.style.backgroundColor ='#252526'
    nav.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
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
    document.body.style.backgroundImage = '';
    nav.style.backgroundColor = '';
    document.body.style.color = '';
    nav.style.boxShadow = ''
    lennyParagraphs.forEach(function(paragraph) {
        paragraph.style.backgroundColor = '';
        paragraph.style.color = '';
        paragraph.style.boxShadow = ''
    });
    skills.forEach(function(skill) {
        skill.style.backgroundColor = ''
        skill.style.color = ''
        skill.style.boxShadow = ''
    } )
    getInTouch.forEach(function(Touch) {
        Touch.style.backgroundColor = ''
        Touch.style.color = ''
        Touch.style.boxShadow = ''
    })
    navText.forEach(function(anchor) {
        anchor.style.color = '';
    });
    isDarkModeAbout = false;
}
elementAbout.onmousedown = clickedAbout;
elementAbout.onclick = toggleModeAbout;