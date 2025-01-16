/**
 * This program is the index for the shapes program.
 *
 * By:      Dominic M.
 * Version: 1.0
 * Since    2024-12-11
 */

import { createPrompt } from 'bun-promptx'
import { Triangle } from './Shapes/Triangle'
import { Quadrilateral } from './Shapes/Quadrilateral'
import { Pentagon } from './Shapes/Pentagon'
import { Hexagon } from './Shapes/Hexagon'
import { Heptagon } from './Shapes/Heptagon'
import { Octagon } from './Shapes/Octagon'
import { Nonagon } from './Shapes/Nonagon'
import { Decagon } from './Shapes/Decagon'

console.log('This program calculates the dimentions of a shapes with 3-10 sides.')

let endProgram = false

while (!endProgram) {
  console.log('\nEnter x to once you have typed all of your necessary sides.')

  const sideAmountInputs: number[] = []
  let endLoop: boolean = false
  let sideCounter = 0

  while (!endLoop) {
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
          const sideAmount = parseFloat(sideAmountInput.value)
          if (isNaN(sideAmount)) {
            throw new Error('Invalid number')
          } else {
            sideAmountInputs.push(sideAmount)
            sideCounter++
          }
        } else {
          throw new Error('Invalid number')
        }
      } catch (error) {
        console.log('\nPlease enter a valid number')
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
        const diagonalAmount = parseFloat(diagonalAmountInput.value)
        if (isNaN(diagonalAmount)) {
          throw new Error('Invalid number')
        } else {
          diagonalAmountInputs.push(diagonalAmount)
          diagonalCounter++
        }
      } else {
        throw new Error('Invalid number')
      }
    } catch (error) {
      console.log('\nPlease enter a valid number')
    }
  }

  // This is a very repetitive way to create the shape objects,
  // but it was the way I could do the quickest to get the program working.
  switch (sideCounter) {
    case 3: {
      // Create a new triangle object
      const triangle = new Triangle(sideAmountInputs, diagonalAmountInputs)

      let endProgram = false

      if (triangle.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram = true
      } else {
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
      }

      while (!endProgram) {
        const optionInput = createPrompt('\nEnter an option: ')
        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${triangle.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 3) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${triangle.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${triangle.perimeter()}`)
              break
            }
            case '4': {
              if (triangle.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 3) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${triangle.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${triangle.area()}`)
              break
            }
            case '7': {
              console.log(`The type of triangle is ${triangle.type()}`)
              break
            }
            case '8': {
              const heightInput = createPrompt('Enter a side number for the height: ')
              try {
                if (heightInput.value !== null) {
                  const height = parseInt(heightInput.value)
                  if (isNaN(height)) {
                    throw new Error('Invalid number')
                  } else if (height <= 0 || height > 3) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The height is ${triangle.height(height)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '9': {
              console.log(`The inner circle radius is ${triangle.innerCircleRadius()}`)
              break
            }
            case '10': {
              console.log(`The circumcircle radius is ${triangle.circumcircleRadius()}`)
              break
            }
            case 'x': {
              endProgram = true
              break
            }
            case 'X': {
              endProgram = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    case 4: {
      // Create a new quadrilateral object
      const quadrilateral = new Quadrilateral(sideAmountInputs, diagonalAmountInputs)

      let endProgram2 = false

      if (quadrilateral.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram2 = true
      } else {
        console.log('\nHere are the options for your shape.')
        console.log('"1" for name of shape')
        console.log('"2" for side lengths')
        console.log('"3" for perimeter')
        console.log('"4" for to see if the shape is regular')
        console.log('"5" for angles')
        console.log('"6" for area')
        console.log('"7" for type of quadrilateral')
        console.log('"x" to exit')
      }

      while (!endProgram2) {
        const optionInput = createPrompt('\nEnter an option: ')

        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${quadrilateral.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 4) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${quadrilateral.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${quadrilateral.perimeter()}`)
              break
            }
            case '4': {
              if (quadrilateral.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 4) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${quadrilateral.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${quadrilateral.area()}`)
              break
            }
            case '7': {
              console.log(`The type of quadrilateral is ${quadrilateral.type()}`)
              break
            }
            case 'x': {
              endProgram2 = true
              break
            }
            case 'X': {
              endProgram2 = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    case 5: {
      // Create a new pentagon object
      const pentagon = new Pentagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram3 = false

      if (pentagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram3 = true
      } else {
        console.log('\nHere are the options for your shape.')
        console.log('"1" for name of shape')
        console.log('"2" for side lengths')
        console.log('"3" for perimeter')
        console.log('"4" for to see if the shape is regular')
        console.log('"5" for angles')
        console.log('"6" for area')
        console.log('"x" to exit')
      }

      while (!endProgram3) {
        const optionInput = createPrompt('\nEnter an option: ')

        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${pentagon.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 5) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${pentagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${pentagon.perimeter()}`)
              break
            }
            case '4': {
              if (pentagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 5) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${pentagon.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${pentagon.area()}`)
              break
            }
            case 'x': {
              endProgram3 = true
              break
            }
            case 'X': {
              endProgram3 = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    case 6: {
      // Create a new hexagon object
      const hexagon = new Hexagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram4 = false

      if (hexagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram4 = true
      } else {
        console.log('\nHere are the options for your shape.')
        console.log('"1" for name of shape')
        console.log('"2" for side lengths')
        console.log('"3" for perimeter')
        console.log('"4" for to see if the shape is regular')
        console.log('"5" for angles')
        console.log('"6" for area')
        console.log('"x" to exit')
      }

      while (!endProgram4) {
        const optionInput = createPrompt('\nEnter an option: ')

        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${hexagon.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 6) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${hexagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${hexagon.perimeter()}`)
              break
            }
            case '4': {
              if (hexagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 6) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${hexagon.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${hexagon.area()}`)
              break
            }
            case 'x': {
              endProgram4 = true
              break
            }
            case 'X': {
              endProgram4 = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    case 7: {
      // Create a new heptagon object
      const heptagon = new Heptagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram5 = false

      if (heptagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram5 = true
      } else {
        console.log('\nHere are the options for your shape.')
        console.log('"1" for name of shape')
        console.log('"2" for side lengths')
        console.log('"3" for perimeter')
        console.log('"4" for to see if the shape is regular')
        console.log('"5" for angles')
        console.log('"6" for area')
        console.log('"x" to exit')
      }

      while (!endProgram5) {
        const optionInput = createPrompt('\nEnter an option: ')

        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${heptagon.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 7) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${heptagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${heptagon.perimeter()}`)
              break
            }
            case '4': {
              if (heptagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 7) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${heptagon.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${heptagon.area()}`)
              break
            }
            case 'x': {
              endProgram5 = true
              break
            }
            case 'X': {
              endProgram5 = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    case 8: {
      // Create a new octogon object
      const octogon = new Octagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram6 = false

      if (octogon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram6 = true
      } else {
        console.log('\nHere are the options for your shape.')
        console.log('"1" for name of shape')
        console.log('"2" for side lengths')
        console.log('"3" for perimeter')
        console.log('"4" for to see if the shape is regular')
        console.log('"5" for angles')
        console.log('"6" for area')
        console.log('"x" to exit')
      }

      while (!endProgram6) {
        const optionInput = createPrompt('\nEnter an option: ')

        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${octogon.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 8) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${octogon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${octogon.perimeter()}`)
              break
            }
            case '4': {
              if (octogon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 8) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${octogon.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${octogon.area()}`)
              break
            }
            case 'x': {
              endProgram6 = true
              break
            }
            case 'X': {
              endProgram6 = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    case 9: {
      // Create a new nonagon object
      const nonagon = new Nonagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram7 = false

      if (nonagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram7 = true
      } else {
        console.log('\nHere are the options for your shape.')
        console.log('"1" for name of shape')
        console.log('"2" for side lengths')
        console.log('"3" for perimeter')
        console.log('"4" for to see if the shape is regular')
        console.log('"5" for angles')
        console.log('"6" for area')
        console.log('"x" to exit')
      }

      while (!endProgram7) {
        const optionInput = createPrompt('\nEnter an option: ')

        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${nonagon.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 9) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${nonagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${nonagon.perimeter()}`)
              break
            }
            case '4': {
              if (nonagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 9) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${nonagon.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${nonagon.area()}`)
              break
            }
            case 'x': {
              endProgram7 = true
              break
            }
            case 'X': {
              endProgram7 = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    case 10: {
      // Create a new decagon object
      const decagon = new Decagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram8 = false

      if (decagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram8 = true
      } else {
        console.log('\nHere are the options for your shape.')
        console.log('"1" for name of shape')
        console.log('"2" for side lengths')
        console.log('"3" for perimeter')
        console.log('"4" for to see if the shape is regular')
        console.log('"5" for angles')
        console.log('"6" for area')
        console.log('"x" to exit')
      }

      while (!endProgram8) {
        const optionInput = createPrompt('\nEnter an option: ')

        if (optionInput.value !== null) {
          switch (optionInput.value) {
            case '1': {
              console.log(`The name of the shape is ${decagon.getName()}`)
              break
            }
            case '2': {
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 10) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The side length is ${decagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '3': {
              console.log(`The perimeter is ${decagon.perimeter()}`)
              break
            }
            case '4': {
              if (decagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            case '5': {
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 10) {
                    throw new Error('Invalid number')
                  } else {
                    console.log(`The angle is ${decagon.angle(angle)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            case '6': {
              console.log(`The area is ${decagon.area()}`)
              break
            }
            case 'x': {
              endProgram8 = true
              break
            }
            case 'X': {
              endProgram8 = true
              break
            }
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    default: {
      console.log('\nThe amount of the shapes sides is not within 3-10.')
      break
    }
  }
  const endProgramInput = createPrompt('\nWould you like to end the program? (y/n): ')
  if (endProgramInput.value === 'y' || endProgramInput.value === 'Y') {
    endProgram = true
  } else {
    console.log('No was selected.')
  }
}
console.log('\nDone.')
