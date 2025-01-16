/**
 * The Quadrilateral Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-14
 */

import { Shape } from './Shape'

export class Quadrilateral extends Shape {
  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfQuadrilateral: number
    if (this.isValid()) {
      areaOfQuadrilateral = Math.sqrt(
        (this.semiPerimeters()[0] - this.sideLengths[0]) *
        (this.semiPerimeters()[0] - this.sideLengths[1]) *
        (this.semiPerimeters()[0] - this.diagonalLengths[0])
      )
      areaOfQuadrilateral = areaOfQuadrilateral + Math.sqrt(
        (this.semiPerimeters()[1] - this.diagonalLengths[0]) *
        (this.semiPerimeters()[1] - this.sideLengths[2]) *
        (this.semiPerimeters()[1] - this.sideLengths[3])
      )
      areaOfQuadrilateral = Math.round(areaOfQuadrilateral * 100) / 100
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
