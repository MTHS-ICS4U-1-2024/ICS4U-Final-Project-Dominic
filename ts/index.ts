/**
 * This program is the index for the shapes program.
 *
 * By:      Dominic M.
 * Version: 1.0
 * Since    2024-12-11
 */

import { createPrompt } from 'bun-promptx'

// print Hello, World!
console.log('This program calculates the dimentions of a shapes with 3-10 sides.')

const sideAmountInput = createPrompt('\nHow many sides does your shape have? ')
let sideAmount: number = -1
let errorInput: boolean = false

if (sideAmountInput.value === null) {
  errorInput = true
} else {
  try {
    sideAmount = parseInt(sideAmountInput.value)
  } catch (error) {
    console.log('Please enter a valid number')
    errorInput = true
  }
}

if (!errorInput) {
  switch (sideAmount) {
    case 3:
      console.log('The shape is a triangle')
      // further code will go here once a class is added
      break
    case 4:
      console.log('The shape is a square')
      // further code will go here once a class is added
      break
    case 5:
      console.log('The shape is a pentagon')
      // further code will go here once a class is added
      break
    case 6:
      console.log('The shape is a hexagon')
      // further code will go here once a class is added
      break
    case 7:
      console.log('The shape is a heptagon')
      // further code will go here once a class is added
      break
    case 8:
      console.log('The shape is a octogon')
      // further code will go here once a class is added
      break
    case 9:
      console.log('The shape is a nonagon')
      // further code will go here once a class is added
      break
    case 10:
      console.log('The shape is a decagon')
      // further code will go here once a class is added
      break
    default:
      console.log('The amount of the shapes sides is not within 3-10.')
      break
  }
} else {
  console.log('Please enter a valid number')
}

console.log('\nDone.')
