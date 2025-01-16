/**
 * The Pentagon Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-15
 */

import { Shape } from './Shape'

export class Pentagon extends Shape {
  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfPentagon: number
    if (this.isValid()) {
      areaOfPentagon = Math.sqrt(
        (this.semiPerimeters()[0] - this.sideLengths[0]) *
        (this.semiPerimeters()[0] - this.sideLengths[1]) *
        (this.semiPerimeters()[0] - this.diagonalLengths[0])
      )
      areaOfPentagon = areaOfPentagon + Math.sqrt(
        (this.semiPerimeters()[1] - this.diagonalLengths[0]) *
        (this.semiPerimeters()[1] - this.sideLengths[2]) *
        (this.semiPerimeters()[1] - this.diagonalLengths[1])
      )
      areaOfPentagon = areaOfPentagon + Math.sqrt(
        (this.semiPerimeters()[2] - this.diagonalLengths[1]) *
        (this.semiPerimeters()[2] - this.sideLengths[3]) *
        (this.semiPerimeters()[2] - this.sideLengths[4])
      )
      areaOfPentagon = Math.round(areaOfPentagon * 100) / 100
    } else {
      areaOfPentagon = -1
    }
    return areaOfPentagon
  }
}
