const upload = document.querySelector('input')
const image = document.querySelector('.img img')
const close = document.querySelector('.close')

upload.addEventListener('change', (event) => {
    uploadFile(event)
})

close.addEventListener('click', () => {
    image.classList.toggle('active') //apenas esconde e não remove a imagem
    close.classList.toggle('exit')
})

function uploadFile(event) {
    image.classList.add('active')
    close.classList.add('exit')

    image.src = URL.createObjectURL(event.target.files[0])
}


/*Se quiser de fato remover a imagem então substitua da linha 9 a 12 por:

close.addEventListener('click', () => {
    image.src = ""
    close.classList.remove('exit')
})

*/