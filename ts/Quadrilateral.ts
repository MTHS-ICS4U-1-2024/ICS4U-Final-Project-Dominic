/**
 * The Triangle Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-18
 */

import { Shape } from './Shape'

export class Quadrilateral extends Shape {
  /**
   * The constructor for the Quadrilateral class.
   *
   * @param {number[]} sides
   * @param {number[]} diagonals
   */
  constructor (sides: number[], diagonals: number[]) {
    super(sides, diagonals)
  }

  /**
   * The area method.
   * 
   * @return {number} of area
   */
  public area (): number {
    let areaOfQuadrilateral: number
    if (this.isValid()) {
      const arrayOfSemiperimeters: number = this.semiPerimeters()[0]
      areaOfQuadrilateral = Math.sqrt(
        (arrayOfSemiperimeters - this.sideLengths[0]) *
        (arrayOfSemiperimeters - this.sideLengths[1]) *
        (arrayOfSemiperimeters - this.diagonalLengths[0])
      )
      areaOfQuadrilateral = areaOfQuadrilateral + Math.sqrt(
        (arrayOfSemiperimeters - this.diagonalLengths[0]) *
        (arrayOfSemiperimeters - this.sideLengths[2]) *
        (arrayOfSemiperimeters - this.sideLengths[3])
      )
    } else {
      areaOfQuadrilateral = -1
    }
    return areaOfQuadrilateral
  }

  /**
   * This method finds the type of quadrilateral.
   * 
   * @return {string} of quadrilateral type
   */
  public type (): string {
    let type: string
    if (this.isValid()) {
      if (this.isRegular()) {
        type = 'Square'
      } else if (this.angles[0] === Math.acos(0) && this.angles[1] === Math.acos(0) && this.angles[2] === Math.acos(0) && this.angles[3] === Math.acos(0)) {
        type = 'Rectangle'
      } else if (this.sideLengths[0] === this.sideLengths[2] && this.sideLengths[1] === this.sideLengths[3]) {
        type = 'Parallelogram'
      } else {
        type = 'Quadrilateral'
      }
    } else {
      type = 'Invalid Quadrilateral'
    }
    return type
  }
}