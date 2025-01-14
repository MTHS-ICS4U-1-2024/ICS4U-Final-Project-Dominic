/**
 * This program is the index for the shapes program.
 *
 * By:      Dominic M.
 * Version: 1.0
 * Since    2024-12-11
 */

import { createPrompt } from 'bun-promptx'
import { Shape } from './Shape'
import { Triangle } from './Triangle'

console.log('This program calculates the dimentions of a shapes with 3-10 sides.')
console.log('\nEnter x to once you have typed all of your necessary sides.')

const sideAmountInputs: number[] = []
let endLoop: boolean = false
let sideCounter = 0

while (endLoop === false) {

  const sideAmountInput = createPrompt('\nEnter a side length: ')

  if (sideAmountInput.value === 'x' || sideAmountInput.value === 'X') {
    if (sideCounter < 3) {
      console.log('\nPlease enter at least 3 sides.')
    } else {
      endLoop = true
    }
  }

  if (!endLoop) {
    try {
      if (sideAmountInput.value !== null) {
        const sideAmount = parseFloat(sideAmountInput.value);
        if (isNaN(sideAmount)) {
          throw new Error('Invalid number');
        } else {
          sideAmountInputs.push(sideAmount);
          sideCounter++
        }
      } else {
        throw new Error('Invalid number');
      } 
    } catch (error) {
      console.log('\nPlease enter a valid number');
    }
  }

  if (sideCounter >= 10) {
    console.log('\nYou have entered the maximum amount of sides.')
    endLoop = true
  }
}

const diagonalAmountInputs: number[] = []
let diagonalCounter = 0

while (diagonalCounter < sideCounter - 3) {
  const diagonalAmountInput = createPrompt('\nEnter a diagonal length: ')

  try {
    if (diagonalAmountInput.value !== null) {
      const diagonalAmount = parseFloat(diagonalAmountInput.value);
      if (isNaN(diagonalAmount)) {
        throw new Error('Invalid number');
      } else {
        diagonalAmountInputs.push(diagonalAmount);
        diagonalCounter++
      }
    } else {
      throw new Error('Invalid number');
    }
  } catch (error) {
    console.log('\nPlease enter a valid number');
  }
}

switch (sideCounter) {
  case 3:
    console.log('\nThe shape is a triangle')

    // Create a new triangle object
    const triangle = new Triangle(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a triangle classis added
    break
  case 4:
    console.log('\nThe shape is a rectangle')
    // further code will go here once a rectangle class is added
    break
  case 5:
    console.log('\nThe shape is a pentagon')
    // further code will go here once a pentagon class is added
    break
  case 6:
    console.log('\nThe shape is a hexagon')
    // further code will go here once a hexagon class is added
    break
  case 7:
    console.log('\nThe shape is a heptagon')
    // further code will go here once a heptagon class is added
    break
  case 8:
    console.log('\nThe shape is a octogon')
    // further code will go here once a octogon class is added
    break
  case 9:
    console.log('\nThe shape is a nonagon')
    // further code will go here once a nonagon class is added
    break
  case 10:
    console.log('\nThe shape is a decagon')
    // further code will go here once a decagon class is added
    break
  default:
    console.log('\nThe amount of the shapes sides is not within 3-10.')
    break
}

console.log('\nDone.')
