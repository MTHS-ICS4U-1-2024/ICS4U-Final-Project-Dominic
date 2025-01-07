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
    for (let anchorComparator = 0; anchorComparator < this.amountOfSides; anchorComparator++) {
      for (let sideComparator = 0; sideComparator < this.amountOfSides; sideComparator++) {
        if (anchorComparator !== sideComparator) {
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
}
