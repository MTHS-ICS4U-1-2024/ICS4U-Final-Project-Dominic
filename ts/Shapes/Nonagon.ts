/**
 * The Nonagon Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-15
 */

import { Shape } from './Shape'

export class Nonagon extends Shape {
  /**
   * The area method which overwrites the area method of the parent class.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfNonagon: number
    if (this.isValid()) {
      // Finds the area of the nonagon by breaking it down into 7 triangles
      areaOfNonagon = Math.sqrt(
        (this.semiPerimeters()[0] - this.sideLengths[0]) *
        (this.semiPerimeters()[0] - this.sideLengths[1]) *
        (this.semiPerimeters()[0] - this.diagonalLengths[0])
      )
      areaOfNonagon = areaOfNonagon + Math.sqrt(
        (this.semiPerimeters()[1] - this.diagonalLengths[0]) *
        (this.semiPerimeters()[1] - this.sideLengths[2]) *
        (this.semiPerimeters()[1] - this.diagonalLengths[1])
      )
      areaOfNonagon = areaOfNonagon + Math.sqrt(
        (this.semiPerimeters()[2] - this.diagonalLengths[1]) *
        (this.semiPerimeters()[2] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[2] - this.sideLengths[3])
      )
      areaOfNonagon = areaOfNonagon + Math.sqrt(
        (this.semiPerimeters()[3] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[3] - this.sideLengths[4]) *
        (this.semiPerimeters()[3] - this.diagonalLengths[3])
      )
      areaOfNonagon = areaOfNonagon + Math.sqrt(
        (this.semiPerimeters()[4] - this.diagonalLengths[3]) *
        (this.semiPerimeters()[4] - this.sideLengths[5]) *
        (this.semiPerimeters()[4] - this.diagonalLengths[4])
      )
      areaOfNonagon = areaOfNonagon + Math.sqrt(
        (this.semiPerimeters()[5] - this.diagonalLengths[4]) *
        (this.semiPerimeters()[5] - this.sideLengths[6]) *
        (this.semiPerimeters()[5] - this.diagonalLengths[5])
      )
      areaOfNonagon = areaOfNonagon + Math.sqrt(
        (this.semiPerimeters()[6] - this.diagonalLengths[5]) *
        (this.semiPerimeters()[6] - this.sideLengths[7]) *
        (this.semiPerimeters()[6] - this.sideLengths[8])
      )
      // Rounds the area to 2 decimal places
      areaOfNonagon = Math.round(areaOfNonagon * 100) / 100
    } else {
      // If the nonagon is invalid, set the area to -1
      areaOfNonagon = -1
    }
    return areaOfNonagon
  }
}
