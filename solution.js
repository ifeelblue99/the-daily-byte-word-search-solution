const table = [
    "C", "A", "T", "F",
    "B", "G", "E", "S",
    "I", "T", "A", "E"
]

const wordToBeChecked = "TAES"
const validMoveIndexes = [1, -1, 4, -4]

// is word exist ?
function isWordExist(word) {
    const firstCharIndexes = getIndex(word[0])
    let isExist = false

    firstCharIndexes.forEach(startIndex => {

        let wordIndex = 1
        const stack = [startIndex]
        const generatedWord = [table[startIndex]]

        while (stack.length) {
            const curr = stack.pop()

            validMoveIndexes.filter(move => {
                const newPos = curr + move
                if (newPos >= 0
                    && newPos <= 11
                    && word[wordIndex] === table[newPos]
                ) {
                    stack.push(newPos)
                    wordIndex++
                    generatedWord.push(table[newPos])
                }
            })
        }

        if (generatedWord.join("") === word) {
            isExist = true
        }
    });

    return isExist
}
// get indexes of the firs char
function getIndex(char) {

    const charIndexes = []
    table.forEach((el, index) => {
        if (el === char) {
            charIndexes.push(index)
        }
    })
    return charIndexes
}

// driver code
console.log(`is ${wordToBeChecked} exists:`,isWordExist(wordToBeChecked))
