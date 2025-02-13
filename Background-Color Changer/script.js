const btn = document.getElementById("btn")
let palete0 = document.getElementById("palete0")
let palete1 = document.getElementById("palete1")
let palete2 = document.getElementById("palete2")
let palete3 = document.getElementById("palete3")

let hex0 = document.getElementById("hexCode0")
let hex1 = document.getElementById("hexCode1")
let hex2 = document.getElementById("hexCode2")
let hex3 = document.getElementById("hexCode3")



function randomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

btn.addEventListener("click", () => {
    palete0.style.backgroundColor = randomColor()
    palete1.style.backgroundColor = randomColor()
    palete2.style.backgroundColor = randomColor()
    palete3.style.backgroundColor = randomColor()

    hex0.innerHTML = randomColor()
    hex1.innerHTML = randomColor()
    hex2.innerHTML = randomColor()
    hex3.innerHTML = randomColor()

})