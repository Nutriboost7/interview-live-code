const test = [
    "Hey fellow warriors",
    "This is a test",
    "This is another test"
]

const checkReverseCode = (t) => {
    const splitWords = t.split(" ")
    let newText = []
    for (const word of splitWords) {
        if (word.length >= 5) {
            newText = [...newText, reverseWord(word)]
        } else {
            newText = [...newText, word]
        }
    }
    return newText.join(" ")
}

const reverseWord = (word) => {
 return word.split('').reverse().join('')
}

for (const t of test) {
    console.log(checkReverseCode())
}