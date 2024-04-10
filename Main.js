let element = document.getElementById('darkmode')
let nav = document.getElementsByClassName('navbar')[0]
       function dark() {
        element.style.backgroundColor = 'black'
        element.style.color = 'white'
        element.innerHTML = 'Light Mode'
        document.body.style.backgroundColor = 'black'
        nav.style.backgroundColor ='black'
        document.body.style.color = 'white'
        nav.style.color = 'white'
       }
       function clicked() {
        element.style.backgroundColor = 'purple'
        element.style.color = 'white'
       }
       element.onmousedown = clicked
       element.onclick = dark



       