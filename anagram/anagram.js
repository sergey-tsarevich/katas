// import fetch from "node-fetch"
import fs from 'fs'

// let words = await fetch('https://codingdojo.org/kata/word_list.txt') => no answers:)
// console.info('===', words.text())

const makeCharactersStat = (word) => {
  const result = {}
  for (let i = 0; i < word.length; i++) {
    if (result[word[i]]) {
      result[word[i]]++
    } else {
      result[word[i]] = 1
    }
  }
  return result
}

function filterSimilarWords(allWords, inWordStat) {
  const similarWords = []
  allWords.forEach(word => {
    const wordStat = makeCharactersStat(word)
    let toAdd = false
    for (const key in wordStat) {
      if (inWordStat[key] && inWordStat[key] >= wordStat[key]) {
        toAdd = true
      } else {
        toAdd = false
        break
      }
    }
    if (toAdd) {
      similarWords.push(word)
    }
  })
  return similarWords
}

const anagram = (inputWord = 'documenting') => {
  const inWordStat = makeCharactersStat(inputWord)
  const words = fs.readFileSync('anagram/word_list.txt', 'utf8').split(/\s+/g)
  const similarWords = filterSimilarWords(words, inWordStat)

  const anagrams = {}
  similarWords.forEach(firstWord => {
    let toAdd = false
    let firstWordStat = makeCharactersStat(firstWord)
    for (let i = 0; i < similarWords.length; i++) {
      const secondWord = similarWords[i]
      if ((firstWord.length + secondWord.length) !== inputWord.length) {
        continue
      }
      firstWordStat = makeCharactersStat(firstWord)
      const secondWordStat = makeCharactersStat(secondWord)
      for (const key in secondWordStat) {
        if (firstWordStat[key]) {
          firstWordStat[key] += secondWordStat[key]
        } else {
          firstWordStat[key] = secondWordStat[key]
        }
      }
      for (const key in firstWordStat) { // compare objects
        if (inWordStat[key] && inWordStat[key] === firstWordStat[key]) {
          toAdd = true
        } else {
          toAdd = false
          break
        }
      }
      if (toAdd && !anagrams[firstWord] && !anagrams[secondWord]) {
        anagrams[firstWord] = secondWord
      }
    }
  })

  return anagrams
}

export { makeCharactersStat, filterSimilarWords, anagram }
