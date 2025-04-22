let pos = document.documentElement

pos.addEventListener('mouseover', e => {
    pos.style.setProperty('--1', e.clientX + "px")
    pos.style.setProperty('--2', e.clientY + "px")
})