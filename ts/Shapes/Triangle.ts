/**
 * The Triangle Class
 *
 * author Dominic M.
 * version 1.0
 * since 2025-01-11
 */

import { Shape } from './Shape'

export class Triangle extends Shape {
  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfTriangle: number
    if (this.isValid()) {
      const arrayOfSemiperimeters: number = this.semiPerimeters()[0]
      // Finds the area of the triangle using Heron's formula
      areaOfTriangle = Math.sqrt(
        arrayOfSemiperimeters *
        (arrayOfSemiperimeters - this.sideLengths[0]) *
        (arrayOfSemiperimeters - this.sideLengths[1]) *
        (arrayOfSemiperimeters - this.sideLengths[2])
      )
      // Rounds the area to 2 decimal places
      areaOfTriangle = Math.round(areaOfTriangle * 100) / 100
    } else {
      // If the triangle is invalid, set the area to -1
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
        // If all sides are equal, the triangle is equilateral
        type = 'Equilateral Triangle'
      } else if (this.angles[0] === Math.acos(0) || this.angles[1] === Math.acos(0) || this.angles[2] === Math.acos(0)) {
        // If one angle is 90 degrees, the triangle is a right angle triangle
        type = 'Right Angle Triangle'
      } else if (this.angles[0] === this.angles[1] || this.angles[0] === this.angles[2] || this.angles[1] === this.angles[2]) {
        // If two angles are equal, the triangle is an isosceles triangle
        type = 'Isosceles Triangle'
      } else {
        // If none of the above, the triangle is a scalene triangle
        type = 'Scalene triangle'
      }
    } else {
      // If the triangle is invalid, set the type to -1
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
    // Decrease the side number by 1 to match the array index
    sideNumber--
    let heightOfTriangle: number
    if (this.isValid()) {
      let validSide: boolean = true
      let base: number = 0
      // Check if the side number is valid
      if (sideNumber >= 0 && sideNumber < 3) {
        base = this.sideLengths[sideNumber]
      } else {
        validSide = false
      }
      if (validSide) {
        // Finds the height of the triangle using the from the area rearranged formula: (A = 1/2 * base * height)
        heightOfTriangle = (2 * this.area()) / base
      } else {
        // If the side number is invalid, set the height to -1
        heightOfTriangle = -1
      }
    } else {
      // If the triangle is invalid, set the height to -1
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
      // Finds the inner circle radius of the triangle using the formula: (A = r * s) to (r = A / s)
      innerRadius = this.area() / this.semiPerimeters()[0]
    } else {
      // If the triangle is invalid, set the inner circle radius to -1
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
      // Finds the outer circle radius of the triangle using the formula: (A = abc / 4R) to (R = abc / 4A)
      outerRadius = (this.sideLengths[0] * this.sideLengths[1] * this.sideLengths[2]) / (4 * this.area())
    } else {
      // If the triangle is invalid, set the outer circle radius to -1
      outerRadius = -1
    }
    return outerRadius
  }
}
