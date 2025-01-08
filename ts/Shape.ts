/**
 * The Shape class
 *
 * author  Dominic M.
 * version 1.0
 * since   2024-01-07
 */

export class Shape {
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
          this.name = 'Rectangle'
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
          this.name = 'Octogon'
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
      return this.name
    } else {
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
    if (sideNumber <= this.amountOfSides && sideNumber > 0) {
      sideNumber--
      return this.sideLengths[sideNumber]
    } else {
      return -1
    }
  }

  /**
   * This method finds the perimeter of the shape.
   *
   * @return {number} of perimeter
   */
  public perimeter (): number {
    // find the sum of all of the lengths in the array
    return this.sideLengths.reduce((a, b) => a + b)
  }

  /**
   * This method checks to see if the shape is a regular shape.
   *
   * @return is the shape is regular
   */
  public isRegular (): boolean {
    // check if all the side lengths are equal
    for (let anchorComparator = 0; anchorComparator < this.amountOfSides; anchorComparator++) {
      for (let sideComparator = 0; sideComparator < this.amountOfSides; sideComparator++) {
        if (this.sideLengths[anchorComparator] !== this.sideLengths[sideComparator]) {
          return false
        }
      }
    }
    return true
  }

  /**
   * Check if the user inputs make a valid shape.
   *
   * @return whether or not the shape is valid
   */
  protected isValid (): boolean {
    if (this.name === 'inValid') {
      return false
    } else {
      // if (sumOfAngles() !== (this.numberOfSides -2) * 180) {
      // return false
      // } else {
      return true
    }
  }

  /**
   * Finds the semiperimeters of every smaller triangle in the shape.
   *
   * @return a numerical array of all of the semiperimeters
   */
  protected semiPerimeters (): number[] {
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
  }
}
