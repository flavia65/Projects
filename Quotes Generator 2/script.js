const generateQuoteBtn = document.getElementById('quoteBtn')
const quoteOutput = document.getElementById('quoteOutput')
const authorOutput = document.getElementById('authorOutput')

//https://www.shopify.com/blog/motivational-quotes


generateQuoteBtn.addEventListener('click', generateQuote)

const arrayOfQuotes = [
    {
        author: 'Albert Einstein',
        quote:
        "We cannot solve problems with the kind of thinking we employed when we came up with them."
    }, {
        author: 'Mahatma Gandhi',
        quote:
        "Learn as if you will live forever, live like you will die tomorrow."
    }, {
        author: 'Mark Twain',
        quote:
        "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."
    }, {
        author: 'Eleanor Roosevelt',
        quote:
        "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out."
    }, {
        author: 'Norman Vincent Peale',
        quote:
        "When you change your thoughts, remember to also change your world."
    }, {
        author: 'Walter Anderson',
        quote:
        "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest."
    }
]

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1)
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`
}