const container = document.querySelector('.content')
const baseURL = "https://api.unsplash.com/photos/random"
const rows = 7

const accessKey = "Hn8L0ifFgdylxZt8NCkWh2Zc5HiDXPtA1ESu4N_cWAo"


for (let i = 0; i < rows * 3; i++) {
    fetch(`${baseURL}?client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img')
            img.src = data.urls.regular
            container.appendChild(img)
        })
}

function randomSize() {
    return `${randomNumber()}x${randomNumber()}`
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 300
}