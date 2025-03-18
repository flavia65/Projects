const inputField = document.getElementById('input-field')
const outputField = document.getElementById('output-field')
const buttons = document.querySelectorAll("button")

inputField.addEventListener('keyup', () => {
    outputField.innerHTML = inputField.value
})

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('uppercase')) {
            outputField.innerHTML = outputField.innerHTML.toUpperCase()
        } else if (btn.classList.contains('lowercase')){
            outputField.innerHTML = outputField.innerHTML.toLocaleLowerCase()
        } else if (btn.classList.contains('capitalize')){
            outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase()
        } else if (btn.classList.contains('bold')) {
            if(outputField.style.fontWeight == 'normal')
            {outputField.style.fontWeight = '800'} else {
                outputField.style.fontWeight = 'normal'
            }
        } else if (btn.classList.contains('italic')) {
            if(outputField.style.fontStyle == 'normal')
            {outputField.style.fontStyle = 'italic'} else {
                outputField.style.fontStyle = 'normal'
            }
        } else if (btn.classList.contains('underline')) {
            if(outputField.style.textDecoration == 'none')
            {outputField.style.textDecoration = 'underline'} else {
                outputField.style.textDecoration = 'none'
            }
        }
    })
})