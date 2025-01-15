/**
 * The Heptagon Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-15
 */

import { Shape } from './Shape'

export class Heptagon extends Shape {
  /**
   * The constructor for the Heptagon class.
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
    let areaOfHeptagon: number
    if (this.isValid()) {
      areaOfHeptagon = Math.sqrt(
        (this.semiPerimeters()[0] - this.sideLengths[0]) *
        (this.semiPerimeters()[0] - this.sideLengths[1]) *
        (this.semiPerimeters()[0] - this.diagonalLengths[0])
      )
      areaOfHeptagon = areaOfHeptagon + Math.sqrt(
        (this.semiPerimeters()[1] - this.diagonalLengths[0]) *
        (this.semiPerimeters()[1] - this.sideLengths[2]) *
        (this.semiPerimeters()[1] - this.diagonalLengths[1])
      )
      areaOfHeptagon = areaOfHeptagon + Math.sqrt(
        (this.semiPerimeters()[2] - this.diagonalLengths[1]) *
        (this.semiPerimeters()[2] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[2] - this.sideLengths[3])
      )
      areaOfHeptagon = areaOfHeptagon + Math.sqrt(
        (this.semiPerimeters()[3] - this.diagonalLengths[2]) *
        (this.semiPerimeters()[3] - this.sideLengths[4]) *
        (this.semiPerimeters()[3] - this.diagonalLengths[3])
      )
      areaOfHeptagon = areaOfHeptagon + Math.sqrt(
        (this.semiPerimeters()[4] - this.diagonalLengths[3]) *
        (this.semiPerimeters()[4] - this.sideLengths[5]) *
        (this.semiPerimeters()[4] - this.sideLengths[6])
      )
    } else {
      areaOfHeptagon = -1
    }
    return areaOfHeptagon
  }
}