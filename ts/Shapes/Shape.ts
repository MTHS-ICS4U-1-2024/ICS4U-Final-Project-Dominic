/**
 * The Shape class
 *
 * author  Dominic M.
 * version 1.0
 * since   2025-01-07
 */

export abstract class Shape {
  /**
   * The name of the shape.
   */
  protected name: string

  /**
   * All of the side lengths of the shape.
   */
  protected sideLengths: number[]

  /**
   * All of the diagonal lengths of the shape.
   */
  protected diagonalLengths: number[]

  /**
   * The amount of sides the shape has.
   */
  protected amountOfSides: number

  /**
   * The amount of diagonals the shape has.
   */
  protected amountOfDiagonals: number

  /**
   * Every angle of the shape.
   */
  protected angles: number[]

  /**
   * This is the constructor.
   *
   * @param sideLengthValues
   * @param diagonalLengthValues
   */
  constructor (sideLengthValues: number[], diagonalLengthValues: number[]) {
    this.sideLengths = sideLengthValues
    this.diagonalLengths = diagonalLengthValues
    this.amountOfSides = sideLengthValues.length
    this.amountOfDiagonals = diagonalLengthValues.length
    this.angles = new Array(sideLengthValues.length).fill(0)
    if (sideLengthValues.length === diagonalLengthValues.length + 3) {
      switch (sideLengthValues.length) {
        case 3:
          this.name = 'Triangle'
          break
        case 4:
          this.name = 'Quadrilateral'
          break
        case 5:
          this.name = 'Pentagon'
          break
        case 6:
          this.name = 'Hexagon'
          break
        case 7:
          this.name = 'Heptagon'
          break
        case 8:
          this.name = 'Octagon'
          break
        case 9:
          this.name = 'Nonagon'
          break
        case 10:
          this.name = 'Decagon'
          break
        default:
          this.name = 'inValid'
          break
      }
    } else {
      this.name = 'inValid'
    }
  }

  /**
   * The getter for the name.
   *
   * @return name of shape
   */
  public getName (): string {
    if (this.isValid()) {
      // If the shape is valid, return the name
      return this.name
    } else {
      // If the shape is invalid, return 'Invalid Shape'
      return 'Invalid Shape'
    }
  }

  /**
   * The getter for a single side length.
   *
   * @param sideNumber
   * @return length of side
   */
  public getSideLength (sideNumber: number): number {
    if (this.isValid()) {
      // If the shape is valid, return the side length
      if (sideNumber <= this.amountOfSides && sideNumber > 0) {
        // Decrease the side number by 1 to match the index
        sideNumber--
        return this.sideLengths[sideNumber]
      } else {
        // If the side number is invalid, return -1
        return -1
      }
    } else {
      // If the shape is invalid, return -1
      return -1
    }
  }

  /**
   * This method finds the perimeter of the shape.
   *
   * @return {number} of perimeter
   */
  public perimeter (): number {
    if (this.isValid()) {
      // find the sum of all of the lengths in the array
      return this.sideLengths.reduce((a, b) => a + b)
    } else {
      // If the shape is invalid, return -1
      return -1
    }
  }

  /**
   * This method checks to see if the shape is a regular shape.
   *
   * @return is the shape is regular
   */
  public isRegular (): boolean {
    if (this.isValid()) {
      // check if all the side lengths are equal
      for (let anchorComparator = 0; anchorComparator < this.amountOfSides; anchorComparator++) {
        for (let sideComparator = 0; sideComparator < this.amountOfSides; sideComparator++) {
          if (this.sideLengths[anchorComparator] !== this.sideLengths[sideComparator]) {
            // if any of the sides are not equal, return false
            return false
          }
        }
      }
      // if all of the sides are equal, return true
      return true
    } else {
      // If the shape is invalid, return false
      return false
    }
  }

  /**
   * This method finds the sum of the angles of the shape.
   *
   * @return {number} of area
   */
  private sumOfAngles (): number {
    if (this.angles[0] === 0) {
      // Run the angle function not to find a single angle, but to fill the angles array.
      this.angle(0)
    }
    // find the sum of all of the angles in the array
    return this.angles.reduce((a, b) => a + b)
  }

  /**
   * Check if the user inputs make a valid shape.
   *
   * @return whether or not the shape is valid
   */
  protected isValid (): boolean {
    if (this.name === 'inValid') {
      // If the name is invalid, return false
      return false
    } else {
      // Uses the formula for the sum of the angles of a polygon to check if the shape is valid
      if (this.sumOfAngles() !== (this.amountOfSides - 2) * 180) {
        // If the sum of the angles is not equal to the formula, the shape is invalid
        return false
      } else {
        // If the sum of the angles is equal to the formula, the shape is valid
        return true
      }
    }
  }

  /**
   * Finds the semiperimeters of every smaller triangle in the shape.
   *
   * @return a numerical array of all of the semiperimeters
   */
  protected semiPerimeters (): number[] {
    if (this.isValid()) {
      const oneLessDiagonal = this.amountOfDiagonals - 1
      let numberOfTriangles: number
      // fill the array with 0's for now
      const semiperimeters = new Array(this.amountOfDiagonals + 1).fill(0)
      for (numberOfTriangles = 0; numberOfTriangles < this.amountOfDiagonals; numberOfTriangles++) {
        const previousDiagonal = numberOfTriangles - 1
        const nextSide = numberOfTriangles + 1
        if (previousDiagonal < 0) {
          // the semiperimeter of the first triangle of that shape
          semiperimeters[numberOfTriangles] =
            (this.sideLengths[numberOfTriangles] + this.sideLengths[nextSide] +
            this.diagonalLengths[numberOfTriangles]) / 2
        } else {
          // the semiperimeter of any other triangle within the shape except for the last one
          semiperimeters[numberOfTriangles] =
            (this.diagonalLengths[previousDiagonal] + this.diagonalLengths[numberOfTriangles] +
            this.sideLengths[nextSide]) / 2
        }
      }
      if (oneLessDiagonal < 0) {
        // The shape is a triangle so this only has one semiperimeter
        semiperimeters[numberOfTriangles] =
          (this.sideLengths[0] + this.sideLengths[1] + this.sideLengths[2]) / 2
      } else {
        // the last semiperimeter of the shape
        semiperimeters[numberOfTriangles] =
          (this.diagonalLengths[numberOfTriangles - 1] + this.sideLengths[this.amountOfSides - 1] +
          this.sideLengths[this.amountOfSides - 2]) / 2
      }
      return semiperimeters
    } else {
      // If the shape is invalid, return an empty array
      return []
    }
  }

  /**
   * This method finds all of the angles in the shape.
   *
   * @param {number} indexOfAngle
   * @return angle in the spot of the index
   */
  public angle (indexOfAngle: number): number {
    // Decrease the index of the angle by 1 to match the array index
    indexOfAngle--
    // Only run entire function if the angle has not been found yet
    if (this.angles[0] === 0) {
      let solvingSide: number = 0 // the side that is paired with the angle being solved
      let givenSideA: number = 0 // a side to help solve the angle
      let givenSideB: number = 0 // another side to help solve the angle
      if (this.sideLengths.length === 3) {
        // Exception for triangle since it has no diagonals
        for (let angleNumber = 0; angleNumber < this.amountOfSides; angleNumber++) {
          if (angleNumber === 0) {
            // This solves for angle 0
            solvingSide = this.sideLengths[1]
            givenSideA = this.sideLengths[0]
            givenSideB = this.sideLengths[2]
          } else if (angleNumber === 1) {
            // This solves for angle 1
            solvingSide = this.sideLengths[2]
            givenSideA = this.sideLengths[1]
            givenSideB = this.sideLengths[0]
          } else if (angleNumber === 2) {
            // This solves for angle 2
            solvingSide = this.sideLengths[0]
            givenSideA = this.sideLengths[2]
            givenSideB = this.sideLengths[1]
          }
          // use cosine law
          this.angles[angleNumber] = Math.acos(
            (((givenSideA ** 2) + (givenSideB ** 2)) - (solvingSide ** 2)) /
              (2 * givenSideA * givenSideB)
          )
          // convert the angle from radians to degrees and round to the nearest hundredth
          this.angles[angleNumber] = Math.round((this.angles[angleNumber] * (180 / Math.PI)) * 100) / 100
        }
      } else {
        // This is what the rest of the shapes use to find the angles
        const numberOfTriangles = this.amountOfDiagonals + 1
        const innerTriangleAngles: number[][] = Array.from({ length: numberOfTriangles }, () => [])
        const oneLessTriangle = numberOfTriangles - 1
        // The first inner triangle is different from the rest of the inner triangles
        for (let angleNumber = 0; angleNumber < this.amountOfSides; angleNumber++) {
          if (angleNumber === 0) {
            // This solves for a piece of the top angle
            solvingSide = this.sideLengths[1]
            givenSideA = this.sideLengths[0]
            givenSideB = this.diagonalLengths[0]
          } else if (angleNumber === 1) {
            // This solves for the left angle of the inner triangle
            solvingSide = this.diagonalLengths[0]
            givenSideA = this.sideLengths[1]
            givenSideB = this.sideLengths[0]
          } else if (angleNumber === 2) {
            // This solves for right angle of the inner triangle
            solvingSide = this.sideLengths[0]
            givenSideA = this.diagonalLengths[0]
            givenSideB = this.sideLengths[1]
          }
          // use cosine law
          innerTriangleAngles[0].push(Math.acos(
            (((givenSideA ** 2) + (givenSideB ** 2)) - (solvingSide ** 2)) /
            (2 * givenSideA * givenSideB))
          )
        }
        // This loop is for the rest of the inner triangles
        for (let triangleNumber = 1; triangleNumber < oneLessTriangle; triangleNumber++) {
          for (let angleNumber = 0; angleNumber < this.amountOfSides; angleNumber++) {
            if (angleNumber === 0) {
              // This solves for a piece of the top angle
              solvingSide = this.sideLengths[triangleNumber + 1]
              givenSideA = this.diagonalLengths[triangleNumber - 1]
              givenSideB = this.diagonalLengths[triangleNumber]
            } else if (angleNumber === 1) {
              // This solves for the left angle of the inner triangle
              solvingSide = this.diagonalLengths[triangleNumber]
              givenSideA = this.sideLengths[triangleNumber + 1]
              givenSideB = this.diagonalLengths[triangleNumber - 1]
            } else if (angleNumber === 2) {
              // This solves for right angle of the inner triangle
              solvingSide = this.diagonalLengths[triangleNumber - 1]
              givenSideA = this.diagonalLengths[triangleNumber]
              givenSideB = this.sideLengths[triangleNumber + 1]
            }
            // use cosine law
            innerTriangleAngles[triangleNumber].push(Math.acos(
              (((givenSideA ** 2) + (givenSideB ** 2)) - (solvingSide ** 2)) /
              (2 * givenSideA * givenSideB))
            )
          }
        }
        // This loop is for the last triangle
        for (let angleNumber = 0; angleNumber < this.amountOfSides; angleNumber++) {
          if (angleNumber === 0) {
            // This solves for a piece of the top angle
            solvingSide = this.sideLengths[this.amountOfSides - 2]
            givenSideA = this.diagonalLengths[this.amountOfDiagonals - 1]
            givenSideB = this.sideLengths[0]
          } else if (angleNumber === 1) {
            // This solves for the left angle of the inner triangle
            solvingSide = this.sideLengths[0]
            givenSideA = this.sideLengths[this.amountOfSides - 2]
            givenSideB = this.diagonalLengths[this.amountOfDiagonals - 1]
          } else if (angleNumber === 2) {
            // This solves for right angle of the inner triangle
            solvingSide = this.diagonalLengths[this.amountOfDiagonals - 1]
            givenSideA = this.sideLengths[0]
            givenSideB = this.sideLengths[this.amountOfSides - 2]
          }
          // use cosine law
          innerTriangleAngles[oneLessTriangle].push(Math.acos(
            (((givenSideA ** 2) + (givenSideB ** 2)) - (solvingSide ** 2)) /
            (2 * givenSideA * givenSideB))
          )
        }
        // This is for adding all of the smaller angles that form the top angle.
        for (let counter = 0; counter < numberOfTriangles; counter++) {
          this.angles[0] = this.angles[0] + innerTriangleAngles[counter][0]
        }
        // convert the angle from radians to degrees and round to the nearest hundredth
        this.angles[0] = Math.round((this.angles[0] * (180 / Math.PI)) * 100) / 100
        // This is for the angle after the top angle which has no diagonals.
        this.angles[1] = Math.round((innerTriangleAngles[0][1] * (180 / Math.PI)) * 100) / 100
        // This is for the angles containing a diagonal.
        // This is a makeshift for loop to add counter mid loop instead of at the end.
        let counter = 0
        while (counter < oneLessTriangle) {
          const counterPlusTwo = counter + 2
          this.angles[counterPlusTwo] = innerTriangleAngles[counter][2]
          counter++
          this.angles[counterPlusTwo] = this.angles[counterPlusTwo] + innerTriangleAngles[counter][1]
          // convert the angle from radians to degrees and round to the nearest hundredth
          this.angles[counterPlusTwo] = Math.round((this.angles[counterPlusTwo] * (180 / Math.PI)) * 100) / 100
        }
        // This is for the last angle of the shape.
        this.angles[this.amountOfSides - 1] = Math.round((innerTriangleAngles[oneLessTriangle][2] * (180 / Math.PI)) * 100) / 100
      }
    }
    return this.angles[indexOfAngle]
  }

  /**
   * The area method for the shape class which will usually be overwritten by other classes.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfSingleTriangle: number
    if (this.isValid()) {
      const arrayOfSemiperimeters: number = this.semiPerimeters()[0]
      // Finds the area of the triangle using Heron's formula
      areaOfSingleTriangle = Math.sqrt(
        arrayOfSemiperimeters *
        (arrayOfSemiperimeters - this.sideLengths[0]) *
        (arrayOfSemiperimeters - this.sideLengths[1]) *
        (arrayOfSemiperimeters - this.sideLengths[2])
      )
      // Rounds the area to 2 decimal places
      areaOfSingleTriangle = Math.round(areaOfSingleTriangle * 100) / 100
    } else {
      // If the triangle is invalid, set the area to -1
      areaOfSingleTriangle = -1
    }
    return areaOfSingleTriangle
  }
}
