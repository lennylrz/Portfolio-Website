let element = document.getElementById('darkmode')
let nav = document.getElementsByClassName('navbar')[0]
let navText = document.querySelectorAll('.navbar li a')
let mainBanner = document.getElementById('bannercontent')
let Explore = document.querySelectorAll('.exploreHead')
let highlight = document.querySelectorAll('.highlight h2')
let highlightFig = document.querySelectorAll('.highlight figure')
let floats = document.getElementsByClassName('float')
let isDarkMode = false;
function toggleMode() {
    if (!isDarkMode) {
        dark();
    } else {
        light();
    }
}
    function dark() {
        element.style.backgroundColor = '#252526'
        element.style.color = '	#f9f9f9'
        element.innerHTML = 'Light Mode'
        mainBanner.style.color = 'black'
        document.body.style.backgroundColor = '#252526'
        for (let i=0; i < floats.length; i++) {
            floats[i].style.backgroundColor = 'rgba(37, 37, 38, 0.8)'
        }
        Explore.forEach(function(explo) {
            explo.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
        })
        highlight.forEach(function(high) {
            high.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
        })
        highlightFig.forEach(function(highFig) {
            highFig.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
        })

        nav.style.backgroundColor ='#252526'
        document.body.style.color = '#f9f9f9'
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
        navText.forEach(function(anchor) {
            anchor.style.color = '#f9f9f9'
        })
        isDarkMode = true;
    }
    function clicked() {
        element.style.backgroundColor = 'purple'
        element.style.color = 'white'
    }
    function light() {
        element.style.backgroundColor = 'white';
        element.style.color = 'black';
        element.innerHTML = 'Dark Mode';
        nav.style.boxShadow = ''
        document.body.style.backgroundColor = '';
        for (let i = 0; i < floats.length; i++) {
            floats[i].style.backgroundColor = '';
        }
        Explore.forEach(function(explo) {
            explo.style.boxShadow = ''
        })
        highlight.forEach(function(high) {
            high.style.boxShadow = ''
        })
        highlightFig.forEach(function(highFig) {
            highFig.style.boxShadow = ''
        })
        nav.style.backgroundColor = '';
        document.body.style.color = '';
        navText.forEach(function(anchor) {
            anchor.style.color = '';
        });
        isDarkMode = false;
    }
    element.onmousedown = clicked
    element.onclick = toggleMode;

let click = document.getElementsByClassName('dropdown')[0]
let teleport = document.querySelector('#options');
let main = document.querySelector('main')
let isTele = false
function tele() {
    teleport.style.visibility = 'visible';
    isTele = true;
}
function noTele() {
    teleport.style.visibility = 'hidden'
    isTele = false
}
function check() {
    if (!isTele) {
        tele()
    } else {
        noTele()
    }
}
click.onclick = tele;
main.onclick = noTele;