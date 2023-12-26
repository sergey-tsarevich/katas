/* global describe, it */
import { assert } from 'chai'
import { anagram, makeCharactersStat, filterSimilarWords } from './anagram.js'

describe('Anagram', function () {
  it('should make characters stat of input word', function () {
    const word = 'documenting'
    const stat = makeCharactersStat(word)
    assert(stat.d === 1)
    assert(stat.n === 2)
    assert(stat.g === 1)
  })

  it('should filter similar words', function () {
    const words = ['doc', 'set', 'tst', 'tests']
    const inWordStat = makeCharactersStat('test')
    const similarWords = filterSimilarWords(words, inWordStat)
    assert(similarWords.length === 2)
    assert.deepEqual(similarWords, ['set', 'tst'])
  })

  it('should find all 2 words anagram', function () {
    const word = 'documenting'
    const twoWordAnagrams = anagram(word)

    assert.deepEqual(twoWordAnagrams, { document: 'gin' })
  })

  it('should find all 2 words anagram for moderator', function () {
    const word = 'moderator'
    const twoWordAnagrams = anagram(word)
    console.info(twoWordAnagrams)
    assert.deepEqual(twoWordAnagrams, { metro: 'road', moor: 'trade' })
  })
})
