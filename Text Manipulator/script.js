const copyTxt = document.querySelector("textarea[name=copyTxt]")
const finalTxt = document.querySelector("textarea[name=finalTxt]")
const moveBtn = document.querySelector(".moveBtn")
const copyBtn = document.querySelector(".copyBtn")
const output = document.querySelector(".output")

copyBtn.addEventListener('click', () => {
    let temp = copyTxt.value
    copyToClipBoard(temp)
})

moveBtn.addEventListener('click', () => {
    let temp = copyTxt.value
    finalTxt.value = temp
})


copyTxt.addEventListener('click', () => this.select())
finalTxt.addEventListener('click', () => this.select())

function copyToClipBoard(str) {
    const outputContainer = document.querySelector(".output-container")
    const textarea = document.createElement('textarea')
    textarea.value = str
    outputContainer.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    outputContainer.removeChild(textarea)
    output.innerHTML = `<h3>Content Copied!</h3>`
    output.classList.add('added')
    setTimeout(() => {
        output.classList.toggle('added')
        output.textContent = ''
    }, 2000)
}