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
   * Every angle of the shape.
   */
  protected angles: number[]

  /**
   * This is the constructor.
   *
   * @param sideLengthValues
   * @param diagonalLengthValues
   */
  constructor(sideLengthValues: number[], diagonalLengthValues: number[]) {
    this.sideLengths = sideLengthValues
    this.diagonalLengths = diagonalLengthValues
    this.amountOfSides = sideLengthValues.length
    switch (sideLengthValues.length) {
      case 3:
        this.name = 'triangle'
        break
      case 4:
        this.name = 'rectangle'
        break
      case 5:
        this.name = 'pentagon'
        break
      case 6:
        this.name = 'hexagon'
        break
      case 7:
        this.name = 'heptagon'
        break
      case 8:
        this.name = 'octogon'
        break
      case 9:
        this.name = 'nonagon'
        break
      case 10:
        this.name = 'decagon'
        break
      default:
        this.name = 'inValid'
        break
    }
    for (let counter = 0; counter < sideLengthValues.length; counter++)
    this.angles[counter] = 0
  }
}
