'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = (phrase) => {
  return phrase
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    .join(' ')
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("lol"), "Lol")
assert.strictEqual(jadenCase("haha hihi"), "Haha Hihi")
assert.strictEqual(jadenCase("haha Hihi"), "Haha Hihi")
assert.strictEqual(jadenCase("ABC ABC"), "ABC ABC")
// End of tests */
