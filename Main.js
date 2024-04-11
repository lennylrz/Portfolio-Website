let element = document.getElementById('darkmode')
let nav = document.getElementsByClassName('navbar')[0]
let navText = document.querySelectorAll('.navbar li a')
let mainBanner = document.getElementById('bannercontent')
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
        nav.style.backgroundColor ='#252526'
        document.body.style.color = '#f9f9f9'
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
        document.body.style.backgroundColor = '';
        for (let i = 0; i < floats.length; i++) {
            floats[i].style.backgroundColor = '';
        }
        nav.style.backgroundColor = '';
        document.body.style.color = '';
        navText.forEach(function(anchor) {
            anchor.style.color = '';
        });
        isDarkMode = false;
    }
    element.onmousedown = clicked
    element.onclick = toggleMode;

       