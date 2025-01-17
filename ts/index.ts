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

console.log('This program calculates the dimentions of a polygons between 3-10 sides.')
console.log('The program will ask for the side lengths and diagonal lengths of the shape.')
console.log('The program will then calculate the perimeter, area, angles, and other information about the shape.')

let endProgram = false

while (!endProgram) {
  console.log('\nEnter x to once you have typed all of your necessary sides.')

  const sideAmountInputs: number[] = []
  let endLoop: boolean = false
  let sideCounter = 0
  let showInformation = true

  while (!endLoop) {
    // Get the side length from the user
    const sideAmountInput = createPrompt('\nEnter a side length: ')

    // If the user enters x, then the loop will end
    if (sideAmountInput.value === 'x' || sideAmountInput.value === 'X') {
      // If the user has entered less than 3 sides, then the program will ask for more sides
      if (sideCounter < 3) {
        console.log('\nPlease enter at least 3 sides.')
      } else {
        endLoop = true
      }
    }

    if (!endLoop) {
      try {
        if (sideAmountInput.value !== null) {
          // Parse the input to a float
          const sideAmount = parseFloat(sideAmountInput.value)
          if (isNaN(sideAmount)) {
            // If the input is not a number, then the program will ask for a valid number
            throw new Error('Invalid number')
          } else {
            // If the input is a number, then the program will add the side to the array
            sideAmountInputs.push(sideAmount)
            sideCounter++
          }
        } else {
          throw new Error('Invalid number')
        }
      } catch (error) {
        // If the input is null or NaN, then the program will ask for a valid number
        console.log('\nPlease enter a valid number')
      }
    }

    // If the user has entered more than 10 sides, then the program will end the loop
    if (sideCounter >= 10) {
      console.log('\nYou have entered the maximum amount of sides.')
      endLoop = true
    }
  }

  const diagonalAmountInputs: number[] = []
  let diagonalCounter = 0
  const diagonalAmounts = sideCounter - 3

  // If the user has entered more than 3 sides, then the program will ask for diagonal lengths
  if (sideCounter > 3) {
    console.log(`\nPlease enter ${diagonalAmounts} diagonal lengths.`)
  }

  // Loop to get the diagonal lengths from the user
  while (diagonalCounter < sideCounter - 3) {
    const diagonalAmountInput = createPrompt('\nEnter a diagonal length: ')

    try {
      if (diagonalAmountInput.value !== null) {
        // Parse the input to a float
        const diagonalAmount = parseFloat(diagonalAmountInput.value)
        if (isNaN(diagonalAmount)) {
          // If the input is not a number, then the program will ask for a valid number
          throw new Error('Invalid number')
        } else {
          // If the input is a number, then the program will add the diagonal to the array
          diagonalAmountInputs.push(diagonalAmount)
          diagonalCounter++
        }
      } else {
        throw new Error('Invalid number')
      }
    } catch (error) {
      // If the input is null or NaN, then the program will ask for a valid number
      console.log('\nPlease enter a valid number')
    }
  }

  // This is a very repetitive way to create the shape objects,
  // but it was the way I could do the quickest to get the program working.
  // A switch statement is used to determine what shape the user has entered
  switch (sideCounter) {
    // If the user has entered 3 sides, then the program will create a triangle object
    case 3: {
      // Create a new triangle object
      const triangle = new Triangle(sideAmountInputs, diagonalAmountInputs)

      let endProgram = false

      // If the triangle is invalid, then the program will end the loop
      if (triangle.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram = true
      }

      while (!endProgram) {
        // Show the information for the shape
        if (showInformation) {
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
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants to do
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${triangle.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number from the user
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 3) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${triangle.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-3
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${triangle.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              // Print out if the shape is regular or not
              if (triangle.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 3) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${triangle.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-3
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${triangle.area()}`)
              break
            }
            // If the user enters 7, then the program will display the type of triangle
            case '7': {
              // Print out the type of triangle
              console.log(`The type of triangle is ${triangle.type()}`)
              break
            }
            // If the user enters 8, then the program will display the height of the triangle
            case '8': {
              // Get the height number from the user
              const heightInput = createPrompt('Enter a side number for the height: ')
              try {
                if (heightInput.value !== null) {
                  // Parse the input to an integer
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
                // Show an error if the input is null, NaN, or not between 1-3
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 9, then the program will display the inner circle radius
            case '9': {
              // Print out the inner circle radius
              console.log(`The inner circle radius is ${triangle.innerCircleRadius()}`)
              break
            }
            // If the user enters 10, then the program will display the circumcircle radius
            case '10': {
              // Print out the circumcircle radius
              console.log(`The circumcircle radius is ${triangle.circumcircleRadius()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram = true
              break
            }
            // If the user enters i, then the program will show the information again
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered 4 sides, then the program will create a quadrilateral
    case 4: {
      // Create a new quadrilateral object
      const quadrilateral = new Quadrilateral(sideAmountInputs, diagonalAmountInputs)

      let endProgram2 = false

      // If the quadrilateral is invalid, then the program will end the loop
      if (quadrilateral.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram2 = true
      }

      while (!endProgram2) {
        // Show the information for the shape
        if (showInformation) {
          console.log('\nHere are the options for your shape.')
          console.log('"1" for name of shape')
          console.log('"2" for side lengths')
          console.log('"3" for perimeter')
          console.log('"4" for to see if the shape is regular')
          console.log('"5" for angles')
          console.log('"6" for area')
          console.log('"7" for type of quadrilateral')
          console.log('"x" to exit')
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants to do
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${quadrilateral.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number from the user
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 4) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${quadrilateral.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-4
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${quadrilateral.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              // Print out if the shape is regular or not
              if (quadrilateral.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 4) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${quadrilateral.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
                // Show an error if the input is null, NaN, or not between 1-4
              } catch (error) {
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${quadrilateral.area()}`)
              break
            }
            // If the user enters 7, then the program will display the type of quadrilateral
            case '7': {
              // Print out the type of quadrilateral
              console.log(`The type of quadrilateral is ${quadrilateral.type()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram2 = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram2 = true
              break
            }
            // If the user enters i, then the program will show the information again
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered 5 sides, then the program will create a pentagon
    case 5: {
      // Create a new pentagon object
      const pentagon = new Pentagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram3 = false

      // If the pentagon is invalid, then the program will end the loop
      if (pentagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram3 = true
      }

      while (!endProgram3) {
        // Show the information for the shape
        if (showInformation) {
          console.log('\nHere are the options for your shape.')
          console.log('"1" for name of shape')
          console.log('"2" for side lengths')
          console.log('"3" for perimeter')
          console.log('"4" for to see if the shape is regular')
          console.log('"5" for angles')
          console.log('"6" for area')
          console.log('"x" to exit')
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants to do
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${pentagon.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 5) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${pentagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-5
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${pentagon.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              // Print out if the shape is regular or not
              if (pentagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 5) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${pentagon.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-5
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${pentagon.area()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram3 = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram3 = true
              break
            }
            // If the user enters i, then the program will show the information again
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered 6 sides, then the program will create a hexagon
    case 6: {
      // Create a new hexagon object
      const hexagon = new Hexagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram4 = false

      // If the hexagon is invalid, then the program will end the loop
      if (hexagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram4 = true
      }

      while (!endProgram4) {
        // Show the information for the shape
        if (showInformation) {
          console.log('\nHere are the options for your shape.')
          console.log('"1" for name of shape')
          console.log('"2" for side lengths')
          console.log('"3" for perimeter')
          console.log('"4" for to see if the shape is regular')
          console.log('"5" for angles')
          console.log('"6" for area')
          console.log('"x" to exit')
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants to do
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${hexagon.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number from the user
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 6) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${hexagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-6
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${hexagon.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              if (hexagon.isRegular()) {
                // Print out if the shape is regular or not
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 6) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${hexagon.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-6
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${hexagon.area()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram4 = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram4 = true
              break
            }
            // If the user enters i, then the program will show the information again
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered 7 sides, then the program will create a heptagon
    case 7: {
      // Create a new heptagon object
      const heptagon = new Heptagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram5 = false

      // If the heptagon is invalid, then the program will end the loop
      if (heptagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram5 = true
      }

      while (!endProgram5) {
        if (showInformation) {
          // Show the information for the shape
          console.log('\nHere are the options for your shape.')
          console.log('"1" for name of shape')
          console.log('"2" for side lengths')
          console.log('"3" for perimeter')
          console.log('"4" for to see if the shape is regular')
          console.log('"5" for angles')
          console.log('"6" for area')
          console.log('"x" to exit')
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants to do
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${heptagon.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number from the user
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 7) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${heptagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-7
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${heptagon.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              // Print out if the shape is regular or not
              if (heptagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 7) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${heptagon.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-7
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${heptagon.area()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram5 = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram5 = true
              break
            }
            // If the user enters i, then the program will show the information
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered 8 sides, then the program will create an octogon
    case 8: {
      // Create a new octogon object
      const octogon = new Octagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram6 = false

      // If the octogon is invalid, then the program will end the loop
      if (octogon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram6 = true
      }

      while (!endProgram6) {
        if (showInformation) {
          // Show the information for the shape
          console.log('\nHere are the options for your shape.')
          console.log('"1" for name of shape')
          console.log('"2" for side lengths')
          console.log('"3" for perimeter')
          console.log('"4" for to see if the shape is regular')
          console.log('"5" for angles')
          console.log('"6" for area')
          console.log('"x" to exit')
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${octogon.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number from the user
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 8) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${octogon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-8
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${octogon.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              // Print out if the shape is regular or not
              if (octogon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 8) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${octogon.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-8
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${octogon.area()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram6 = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram6 = true
              break
            }
            // If the user enters i, then the program will show the information again
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered 9 sides, then the program will create a nonagon
    case 9: {
      // Create a new nonagon object
      const nonagon = new Nonagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram7 = false

      // If the nonagon is invalid, then the program will
      if (nonagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram7 = true
      }

      while (!endProgram7) {
        if (showInformation) {
          // Show the information for the shape
          console.log('\nHere are the options for your shape.')
          console.log('"1" for name of shape')
          console.log('"2" for side lengths')
          console.log('"3" for perimeter')
          console.log('"4" for to see if the shape is regular')
          console.log('"5" for angles')
          console.log('"6" for area')
          console.log('"x" to exit')
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${nonagon.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number from the user
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 9) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${nonagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-9
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${nonagon.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              // Print out if the shape is regular or not
              if (nonagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 9) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${nonagon.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-9
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${nonagon.area()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram7 = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram7 = true
              break
            }
            // If the user enters i, then the program will show the information again
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered 10 sides, then the program will create a decagon
    case 10: {
      // Create a new decagon object
      const decagon = new Decagon(sideAmountInputs, diagonalAmountInputs)

      let endProgram8 = false

      // If the decagon is invalid, then the program will end the loop
      if (decagon.perimeter() === -1) {
        console.log('\nInvalid Shape.')
        endProgram8 = true
      }

      while (!endProgram8) {
        if (showInformation) {
          // Show the information for the shape
          console.log('\nHere are the options for your shape.')
          console.log('"1" for name of shape')
          console.log('"2" for side lengths')
          console.log('"3" for perimeter')
          console.log('"4" for to see if the shape is regular')
          console.log('"5" for angles')
          console.log('"6" for area')
          console.log('"x" to exit')
          showInformation = false
        }

        console.log('\nPress "i" to see the options again.')
        // Get the option from the user
        const optionInput = createPrompt('Enter an option: ')

        if (optionInput.value !== null) {
          // Switch statement to determine what the user wants
          switch (optionInput.value) {
            // If the user enters 1, then the program will display the name of the shape
            case '1': {
              // Print out the name of the shape
              console.log(`The name of the shape is ${decagon.getName()}`)
              break
            }
            // If the user enters 2, then the program will display the side lengths
            case '2': {
              // Get the side number from the user
              const sideLengthInput = createPrompt('Enter a side number: ')
              try {
                if (sideLengthInput.value !== null) {
                  // Parse the input to an integer
                  const sideLength = parseInt(sideLengthInput.value)
                  if (isNaN(sideLength)) {
                    throw new Error('Invalid number')
                  } else if (sideLength <= 0 || sideLength > 10) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the side length
                    console.log(`The side length is ${decagon.getSideLength(sideLength)}`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-10
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 3, then the program will display the perimeter
            case '3': {
              // Print out the perimeter
              console.log(`The perimeter is ${decagon.perimeter()}`)
              break
            }
            // If the user enters 4, then the program will display if the shape is regular or not
            case '4': {
              // Print out if the shape is regular or not
              if (decagon.isRegular()) {
                console.log('The shape is regular')
              } else {
                console.log('The shape is not regular')
              }
              break
            }
            // If the user enters 5, then the program will display the angles
            case '5': {
              // Get the angle number from the user
              const angleInput = createPrompt('Enter an angle number: ')
              try {
                if (angleInput.value !== null) {
                  // Parse the input to an integer
                  const angle = parseInt(angleInput.value)
                  if (isNaN(angle)) {
                    throw new Error('Invalid number')
                  } else if (angle <= 0 || angle > 10) {
                    throw new Error('Invalid number')
                  } else {
                    // Print out the angle corresponding to the angle number inputted
                    console.log(`The angle is ${decagon.angle(angle)} °`)
                  }
                } else {
                  throw new Error('Invalid number')
                }
              } catch (error) {
                // Show an error if the input is null, NaN, or not between 1-10
                console.log('Please enter a valid number')
              }
              break
            }
            // If the user enters 6, then the program will display the area
            case '6': {
              // Print out the area
              console.log(`The area is ${decagon.area()}`)
              break
            }
            // If the user enters x, then the program will get out of the loop, and creating a new shape to calculate
            case 'x': {
              endProgram8 = true
              break
            }
            // If the user enters X, then the program will get out of the loop, and creating a new shape to calculate
            case 'X': {
              endProgram8 = true
              break
            }
            // If the user enters i, then the program will show the information again
            case 'i': {
              showInformation = true
              break
            }
            // If the user enters anything else, then the program will show an error
            default: {
              console.log('\nInvalid option')
              break
            }
          }
        }
      }
      break
    }
    // If the user has entered anything else, then the program will show an error
    default: {
      console.log('\nThe amount of the shapes sides is not within 3-10.')
      break
    }
  }
  let invalidInput = true
  while (invalidInput) {
    // Ask the user if they want to end the program
    const endProgramInput = createPrompt('\nWould you like to end the program? (y/n): ')
    if (endProgramInput.value === 'y' || endProgramInput.value === 'Y') {
      // End the program
      endProgram = true
      invalidInput = false
    } else if (endProgramInput.value === 'n' || endProgramInput.value === 'N') {
      // Continue the program, and start over, by asking the user for the amount of sides for a new shape
      invalidInput = false
    } else {
      // Show an error if the user enters anything else
      console.log('Invalid input, please enter y or n.')
    }
  }
}

// End the program
console.log('\nDone.')
