/**
 * The Hexagon Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-15
 */

import { Shape } from './Shape'

export class Hexagon extends Shape {
  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfHexagon: number
    if (this.isValid()) {
      areaOfHexagon = Math.sqrt(
        (this.semiPerimeters()[0] - this.sideLengths[0]) *
        (this.semiPerimeters()[0] - this.sideLengths[1]) *
        (this.semiPerimeters()[0] - this.diagonalLengths[0])
      )
      areaOfHexagon = areaOfHexagon + Math.sqrt(
        (this.semiPerimeters()[1] - this.diagonalLengths[0]) *
        (this.semiPerimeters()[1] - this.sideLengths[2]) *
        (this.semiPerimeters()[1] - this.diagonalLengths[1])
      )
      areaOfHexagon = areaOfHexagon + Math.sqrt(
        (this.semiPerimeters()[2] - this.diagonalLengths[1]) *
        (this.semiPerimeters()[2] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[2] - this.sideLengths[3])
      )
      areaOfHexagon = areaOfHexagon + Math.sqrt(
        (this.semiPerimeters()[3] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[3] - this.sideLengths[4]) *
        (this.semiPerimeters()[3] - this.sideLengths[5])
      )
    } else {
      areaOfHexagon = -1
    }
    return areaOfHexagon
  }
}
