/**
 * The Vehicle Class
 *
 * author Dominic M.
 * version 1.0
 * since 2024-11-08
 */

import { Shape } from './Shape'

export class Triangle extends Shape {
  /**
   * The constructor for the Triangle class.
   *
   * @param {number} sideA
   * @param {number} sideB
   * @param {number} sideC
   */
  constructor (sideA: number, sideB: number, sideC: number) {
    const sides: number[] = [sideA, sideB, sideC]
    const diagonals: number[] = [] // no diagonals
    super(sides, diagonals)
  }

  /**
   * Getter for the first side.
   *
   * @return {number} of side length A
   */
  public get sideLengthA (): number {
    return this.sideA
  }

  /**
   * Getter for the second side.
   *
   * @return {number} of side length B
   */
  public get sideLengthB (): number {
    return this.sideB
  }

  /**
   * Getter for the second side.
   *
   * @return {number} of side length C
   */
  public get sideLengthC (): number {
    return this.sideC
  }

  /**
   * The perimeter method.
   *
   * @return {number} of perimeter
   */
  private perimeter (): number {
    let perimeterOfTriangle: number
    if (this.isValid()) {
      perimeterOfTriangle = this.sideA + this.sideB + this.sideC
    } else {
      perimeterOfTriangle = -1
    }
    return perimeterOfTriangle
  }

  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfTriangle: number
    if (this.isValid()) {
      const arrayOfSemiperimeters: number[] = this.semiPerimeters()
      areaOfTriangle = Math.sqrt(
        arrayOfSemiperimeters[0] *
        (arrayOfSemiperimeters[0] - this.sideLengths[0]) *
        (arrayOfSemiperimeters[0] - this.sideLengths[1]) *
        (arrayOfSemiperimeters[0] - this.sideLengths[2])
      )
    } else {
      areaOfTriangle = -1
    }
    return areaOfTriangle
  }

  /**
   * This method finds the type of triangle.
   *
   * @return {string} of triangle type
   */
  public type (): string {
    let type: string
    if (this.isValid()) {
      if (this.isRegular()) {
        type = 'Equilateral Triangle'
      } else if (this.angles[0] === Math.acos(0) || this.angles[1] === Math.acos(0) || this.angles[2] === Math.acos(0)) {
        type = 'Right Angle Triangle'
      } else if (this.angles[0] === this.angles[1] || this.angles[0] === this.angles[2] || this.angles[1] === this.angles[2]) {
        type = 'Isosceles Triangle'
      } else {
        type = 'Scalene triangle'
      }
    } else {
      type = '-1'
    }
    return type
  }

  /**
   * This method finds the height of the triangle.
   *
   * @param {number} sideNumber
   * @return {number} of height to the corresponding side
   */
  public height (sideNumber: number): number {
    let heightOfTriangle: number
    if (this.isValid()) {
      let validSide: boolean = true
      let base: number = 0
      if (sideNumber === 1) {
        base = this.sideA
      } else if (sideNumber === 2) {
        base = this.sideB
      } else if (sideNumber === 3) {
        base = this.sideC
      } else {
        validSide = false
      }
      if (validSide) {
        heightOfTriangle = (2 * this.area()) / base
      } else {
        heightOfTriangle = -1
      }
    } else {
      heightOfTriangle = -1
    }
    return heightOfTriangle
  }

  /**
   * This method calculates the inner circle radius
   *
   * @return {number} of inner circle radius
   */
  public innerCircleRadius (): number {
    let innerRadius: number
    if (this.isValid()) {
      innerRadius = this.area() / this.semiPerimeter()
    } else {
      innerRadius = -1
    }
    return innerRadius
  }

  /**
   * This method calculates the circumcircle radius
   *
   * @return {number} of circumcircle radius
   */
  public circumcircleRadius (): number {
    let outerRadius: number
    if (this.isValid()) {
      outerRadius = (this.sideA * this.sideB * this.sideC) / (4 * this.area())
    } else {
      outerRadius = -1
    }
    return outerRadius
  }
}
