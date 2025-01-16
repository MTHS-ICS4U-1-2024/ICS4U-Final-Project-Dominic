/**
 * The Octagon Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-15
 */

import { Shape } from './Shape'

export class Octagon extends Shape {
  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfOctagon: number
    if (this.isValid()) {
      areaOfOctagon = Math.sqrt(
        (this.semiPerimeters()[0] - this.sideLengths[0]) *
        (this.semiPerimeters()[0] - this.sideLengths[1]) *
        (this.semiPerimeters()[0] - this.diagonalLengths[0])
      )
      areaOfOctagon = areaOfOctagon + Math.sqrt(
        (this.semiPerimeters()[1] - this.diagonalLengths[0]) *
        (this.semiPerimeters()[1] - this.sideLengths[2]) *
        (this.semiPerimeters()[1] - this.diagonalLengths[1])
      )
      areaOfOctagon = areaOfOctagon + Math.sqrt(
        (this.semiPerimeters()[2] - this.diagonalLengths[1]) *
        (this.semiPerimeters()[2] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[2] - this.sideLengths[3])
      )
      areaOfOctagon = areaOfOctagon + Math.sqrt(
        (this.semiPerimeters()[3] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[3] - this.sideLengths[4]) *
        (this.semiPerimeters()[3] - this.diagonalLengths[3])
      )
      areaOfOctagon = areaOfOctagon + Math.sqrt(
        (this.semiPerimeters()[4] - this.diagonalLengths[3]) *
        (this.semiPerimeters()[4] - this.sideLengths[5]) *
        (this.semiPerimeters()[4] - this.diagonalLengths[4])
      )
      areaOfOctagon = areaOfOctagon + Math.sqrt(
        (this.semiPerimeters()[5] - this.diagonalLengths[4]) *
        (this.semiPerimeters()[5] - this.sideLengths[6]) *
        (this.semiPerimeters()[5] - this.sideLengths[7])
      )
      areaOfOctagon = Math.round(areaOfOctagon * 100) / 100
    } else {
      areaOfOctagon = -1
    }
    return areaOfOctagon
  }
}
