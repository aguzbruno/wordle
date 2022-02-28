const fs = require('fs')

const func = () => {
    let rawTotalWords = fs.readFileSync('allwords.json')
    let totalWords = JSON.parse(rawTotalWords)
    let rawYesWords = fs.readFileSync('mediumword.json')
    let yesWords = JSON.parse(rawYesWords)
    
    let noWords = []

    totalWords.forEach((word) => {
        if (!yesWords.includes(word)) {
            noWords.push(word)
        }
    })
    
    fs.writeFileSync('WordsHard.json', JSON.stringify(noWords))

    
}

func()