/**
 * The Decagon Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-15
 */

import { Shape } from './Shape'

export class Decagon extends Shape {
  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfDecagon: number
    if (this.isValid()) {
      // Finds the area of the decagon by breaking it down into 8 triangles
      areaOfDecagon = Math.sqrt(
        (this.semiPerimeters()[0] - this.sideLengths[0]) *
        (this.semiPerimeters()[0] - this.sideLengths[1]) *
        (this.semiPerimeters()[0] - this.diagonalLengths[0])
      )
      areaOfDecagon = areaOfDecagon + Math.sqrt(
        (this.semiPerimeters()[1] - this.diagonalLengths[0]) *
        (this.semiPerimeters()[1] - this.sideLengths[2]) *
        (this.semiPerimeters()[1] - this.diagonalLengths[1])
      )
      areaOfDecagon = areaOfDecagon + Math.sqrt(
        (this.semiPerimeters()[2] - this.diagonalLengths[1]) *
        (this.semiPerimeters()[2] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[2] - this.sideLengths[3])
      )
      areaOfDecagon = areaOfDecagon + Math.sqrt(
        (this.semiPerimeters()[3] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[3] - this.sideLengths[4]) *
        (this.semiPerimeters()[3] - this.diagonalLengths[3])
      )
      areaOfDecagon = areaOfDecagon + Math.sqrt(
        (this.semiPerimeters()[4] - this.diagonalLengths[3]) *
        (this.semiPerimeters()[4] - this.sideLengths[5]) *
        (this.semiPerimeters()[4] - this.diagonalLengths[4])
      )
      areaOfDecagon = areaOfDecagon + Math.sqrt(
        (this.semiPerimeters()[5] - this.diagonalLengths[4]) *
        (this.semiPerimeters()[5] - this.sideLengths[6]) *
        (this.semiPerimeters()[5] - this.diagonalLengths[5])
      )
      areaOfDecagon = areaOfDecagon + Math.sqrt(
        (this.semiPerimeters()[6] - this.diagonalLengths[5]) *
        (this.semiPerimeters()[6] - this.sideLengths[7]) *
        (this.semiPerimeters()[6] - this.diagonalLengths[6])
      )
      areaOfDecagon = areaOfDecagon + Math.sqrt(
        (this.semiPerimeters()[7] - this.diagonalLengths[6]) *
        (this.semiPerimeters()[7] - this.sideLengths[8]) *
        (this.semiPerimeters()[7] - this.sideLengths[9])
      )
      // Rounds the area to 2 decimal places
      areaOfDecagon = Math.round(areaOfDecagon * 100) / 100
    } else {
      // If the decagon is invalid, the area is set to -1
      areaOfDecagon = -1
    }
    return areaOfDecagon
  }
}
