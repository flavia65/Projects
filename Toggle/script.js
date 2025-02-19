let toggler = document.getElementById('switch')

toggler.addEventListener('click', () => {
    if(toggler.checked === true) {
        document.body.style.backgroundColor = "rgb(0, 18, 43)"
    } else {
        document.body.style.backgroundColor = "white"
    }
})