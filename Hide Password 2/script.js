const input = document.querySelector('input')
const eye = document.querySelector('#eye-icon')

eye.addEventListener('click', () => {
    if(input.type === 'password'){
        input.type = "text"
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
    } else {
        input.type = "password"
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
    }

    //option 2
    // input.type === "password" ? (input.type = "text") : (input.type = "password")
})