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
   * The area method which overwrites the area method of the parent class.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfQuadrilateral: number
    if (this.isValid()) {
      // Finds the area of the quadrilateral by breaking it down into 2 triangles
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
      // Rounds the area to 2 decimal places
      areaOfQuadrilateral = Math.round(areaOfQuadrilateral * 100) / 100
    } else {
      // If the quadrilateral is invalid, set the area to -1
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
        // If all sides are equal, it is a square
        type = 'Square'
      } else if (this.angles[0] === Math.acos(0) && this.angles[1] === Math.acos(0) && this.angles[2] === Math.acos(0) && this.angles[3] === Math.acos(0)) {
        // If all angles are 90 degrees, it is a rectangle
        type = 'Rectangle'
      } else if (this.sideLengths[0] === this.sideLengths[2] && this.sideLengths[1] === this.sideLengths[3]) {
        // If opposite sides are equal, it is a parallelogram
        type = 'Parallelogram'
      } else {
        // If none of the above, it is a quadrilateral
        type = 'Quadrilateral'
      }
    } else {
      // If the quadrilateral is invalid, set the type to 'Invalid Quadrilateral'
      type = 'Invalid Quadrilateral'
    }
    return type
  }
}
