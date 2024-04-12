let elementProjects = document.getElementById('darkmodeProjects')
let nav = document.getElementsByClassName('navbar')[0]
let navText = document.querySelectorAll('.navbar li a')
let isDarkModeProjects = false;
let all = document.querySelectorAll('#All h1')
let image = document.querySelectorAll('.projectImage')
let caption = document.querySelectorAll('.projectCaption')
let button = document.getElementById('button')
function toggleModeProjects() {
    if (!isDarkModeProjects) {
        darkProjects();
    } else {
        lightProjects();
    }
}
    function darkProjects() {
        elementProjects.style.backgroundColor = '#252526'
        elementProjects.style.color = '	#f9f9f9'
        elementProjects.innerHTML = 'Light Mode'
        document.body.style.backgroundImage = 'url(Resources/projectbackgroundDark.png)'
        nav.style.backgroundColor ='#252526'
        all.forEach(function(a) {
            a.style.backgroundColor = '#252526';
            a.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px';
        })
        button.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
        button.style.backgroundColor = '#252526'
        image.forEach(function(i) {
            i.style.backgroundColor = '#252526';
            i.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px';
        })
        caption.forEach(function(c) {
            c.style.backgroundColor = '#252526';
            c.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px';
        })
        document.body.style.color = '#f9f9f9'
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px'
        navText.forEach(function(anchor) {
            anchor.style.color = '#f9f9f9'
        })
        isDarkModeProjects = true;
    }
    function clickedProjects() {
        elementProjects.style.backgroundColor = 'purple'
        elementProjects.style.color = 'white'
    }
    function lightProjects() {
        elementProjects.style.backgroundColor = 'white';
        elementProjects.style.color = 'black';
        elementProjects.innerHTML = 'Dark Mode';
        nav.style.boxShadow = ''
        all.forEach(function(a) {
            a.style.backgroundColor = '';
            a.style.boxShadow = '';
        })
        image.forEach(function(i) {
            i.style.backgroundColor = '';
            i.style.boxShadow = '';
        })
        button.style.boxShadow = ''
        button.style.backgroundColor = ''
        caption.forEach(function(c) {
            c.style.backgroundColor = '';
            c.style.boxShadow = '';
        })
        document.body.style.backgroundImage = ''
        nav.style.backgroundColor = '';
        document.body.style.color = '';
        navText.forEach(function(anchor) {
            anchor.style.color = '';
        });
        isDarkModeProjects = false;
    }
    elementProjects.onmousedown = clickedProjects
    elementProjects.onclick = toggleModeProjects;

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