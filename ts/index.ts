/**
 * This program is the index for the shapes program.
 *
 * By:      Dominic M.
 * Version: 1.0
 * Since    2024-12-11
 */

import { createPrompt } from 'bun-promptx'
import { Triangle } from './Triangle'
import { Quadrilateral } from './Quadrilateral'
import { Pentagon } from './Pentagon'
import { Hexagon } from './Hexagon'
import { Heptagon } from './Heptagon'
import { Octagon } from './Octagon'
import { Nonagon } from './Nonagon'
import { Decagon } from './Decagon'

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

    let endProgram = false

    console.log('\nHere are the options for your shape.')
    console.log('"1" for name of shape')
    console.log('"2" for side lengths')
    console.log('"3" for perimeter')
    console.log('"4" for to see if the shape is regular')
    console.log('"5" for angles')
    console.log('"6" for area')
    console.log('"7" for type of triangle')
    console.log('"8" for height of triangle')
    console.log('"9" for inner circle radius')
    console.log('"10" for circumcircle radius')
    console.log('"x" to exit')

    while (!endProgram) {
      const optionInput = createPrompt('\nEnter an option: ')

      if (optionInput.value !== null) {
        switch (optionInput.value) {
          case '1':
            console.log('\nThe name of the shape is ' + triangle.getName())
            break
          case '2':
            const sideLengthInput = createPrompt('\nEnter a side number: ')

            if (sideLengthInput.value !== null) {
              const sideLength = parseInt(sideLengthInput.value);
              if (isNaN(sideLength)) {
                throw new Error('Invalid number')
              } else if (sideLength < 0 || sideLength > 2) {
                throw new Error('Invalid number')
              } else {
                console.log('\nThe side length is ' + triangle.getSideLength(sideLength))
              }
            } else {
              throw new Error('Invalid number');
            }
            break
          case '3':
            console.log('\nThe perimeter is ' + triangle.perimeter())
            break
          case '4':
            if (triangle.isRegular()) {
              console.log('\nThe shape is regular')
            } else {
              console.log('\nThe shape is not regular')
            }
            break
          case '5':
            const angleInput = createPrompt('\nEnter an angle number: ')

            if (angleInput.value !== null) {
              const angle = parseInt(angleInput.value);
              if (isNaN(angle)) {
                throw new Error('Invalid number');
              } else if (angle < 0 || angle > 2) {
                throw new Error('Invalid number');
              } else {
                console.log('\nThe angle is ' + triangle.angle(angle))
              }
            } else {
              throw new Error('Invalid number');
            }
            break
          case '6':
            console.log('\nThe area is ' + triangle.area())
            break
          case '7':
            console.log('\nThe type of triangle is ' + triangle.type())
            break
          case '8':
            const heightInput = createPrompt('\nEnter a side number for the height: ')

            if (heightInput.value !== null) {
              const height = parseInt(heightInput.value);
              if (isNaN(height)) {
                throw new Error('Invalid number');
              } else if (height < 0 || height > 2) {
                throw new Error('Invalid number');
              } else {
                console.log('\nThe height is ' + triangle.height(height))
              }
            } else {
              throw new Error('Invalid number');
            }
            break
          case '9':
            console.log('\nThe inner circle radius is ' + triangle.innerCircleRadius())
            break
          case '10':
            console.log('\nThe circumcircle radius is ' + triangle.circumcircleRadius())
            break
          case 'x':
            endProgram = true
            break
          default:
            console.log('\nInvalid option')
            break
        }
      }
    }
    break

  case 4:
    console.log('\nThe shape is a quadrilateral')

    // Create a new quadrilateral object
    const quadrilateral = new Quadrilateral(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a rectangle class is added
    break
  case 5:
    console.log('\nThe shape is a pentagon')

    // Create a new pentagon object
    const pentagon = new Pentagon(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a pentagon class is added
    break
  case 6:
    console.log('\nThe shape is a hexagon')

    // Create a new hexagon object
    const hexagon = new Hexagon(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a hexagon class is added
    break
  case 7:
    console.log('\nThe shape is a heptagon')

    // Create a new heptagon object
    const heptagon = new Heptagon(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a heptagon class is added
    break
  case 8:
    console.log('\nThe shape is a octogon')

    // Create a new octogon object
    const octogon = new Octagon(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a octogon class is added
    break
  case 9:
    console.log('\nThe shape is a nonagon')

    // Create a new nonagon object
    const nonagon = new Nonagon(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a nonagon class is added
    break
  case 10:
    console.log('\nThe shape is a decagon')

    // Create a new decagon object
    const decagon = new Decagon(sideAmountInputs, diagonalAmountInputs)
    // further code will go here once a decagon class is added
    break
  default:
    console.log('\nThe amount of the shapes sides is not within 3-10.')
    break
}

console.log('\nDone.')
