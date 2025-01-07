/**
 * The Vehicle Class
 *
 * author Dominic M.
 * version 1.0
 * since 2024-11-08
 */

export class Triangle {
  /**
   * The first side length of the triange.
   */
  private readonly sideA: number

  /**
   *  The second side length of the triange.
  */
  private readonly sideB: number

  /**
   * The third side length of the triange.
   */
  private readonly sideC: number

  constructor (sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
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
   * The semi-periemter method
   *
   * @return {number} of semi-perimeter
   */
  public semiPerimeter (): number {
    let semiPerimeterOfTriangle: number
    if (this.isValid()) {
      semiPerimeterOfTriangle = this.perimeter() / 2
    } else {
      semiPerimeterOfTriangle = -1
    }
    return semiPerimeterOfTriangle
  }

  /**
   * Checks if the user inputs make a valid triangle.
   *
   * @return {boolean} if the the triangle is real
   */
  public isValid (): boolean {
    let returnValue: boolean = false
    if ((this.sideA + this.sideB) > this.sideC) {
      if ((this.sideA + this.sideC) > this.sideB) {
        if ((this.sideB + this.sideC) > this.sideA) {
          returnValue = true
        }
      }
    }
    return returnValue
  }

  /**
   * The area method.
   *
   * @return {number} of area
   */
  public area (): number {
    let areaOfTriangle: number
    if (this.isValid()) {
      areaOfTriangle = Math.sqrt(
        this.semiPerimeter() *
        (this.semiPerimeter() - this.sideA) *
        (this.semiPerimeter() - this.sideB) *
        (this.semiPerimeter() - this.sideC)
      )
    } else {
      areaOfTriangle = -1
    }
    return areaOfTriangle
  }

  /**
   * This method finds an angle of the triangle.
   *
   * @param {number} angleNumber to solve for
   * @return {number} the corresponding angle
   */
  public angle (angleNumber: number): number {
    let solvedAngle: number
    if (this.isValid()) {
      let validAngle: boolean = true
      let solvingSide: number = 0 // the side that is paired with the angle being solved
      let givenSideA: number = 0 // a side to help solve the angle
      let givenSideB: number = 0 // another side to help solve the angle
      if (angleNumber === 1) {
        solvingSide = this.sideA
        givenSideA = this.sideB
        givenSideB = this.sideC
      } else if (angleNumber === 2) {
        solvingSide = this.sideB
        givenSideA = this.sideC
        givenSideB = this.sideA
      } else if (angleNumber === 3) {
        solvingSide = this.sideC
        givenSideA = this.sideA
        givenSideB = this.sideB
      } else {
        validAngle = false
      }
      if (validAngle) {
        // use cosine law
        solvedAngle = Math.acos(
          (((givenSideA ** 2) + (givenSideB ** 2)) - (solvingSide ** 2)) /
          (2 * givenSideA * givenSideB)
        )
      } else {
        solvedAngle = -1
      }
    } else {
      solvedAngle = -1
    }
    return solvedAngle
  }

  /**
   * This method finds the type of triangle.
   *
   * @return {string} of triangle type
   */
  public getType (): string {
    let type: string
    if (this.isValid()) {
      const angleA: number = this.angle(1)
      const angleB: number = this.angle(2)
      const angleC: number = this.angle(3)
      if (angleA === Math.acos(0) || angleB === Math.acos(0) || angleC === Math.acos(0)) {
        type = 'Right Angle Triangle'
      } else if (angleB === angleC && angleA === angleB) {
        type = 'Equilateral Triangle'
      } else if (angleA === angleB || angleB === angleC || angleA === angleC) {
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
