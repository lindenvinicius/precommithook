/**
 * Simple Calculator Module
 * Provides basic arithmetic operations
 */

'use strict';

/**
 * Calculator class with basic arithmetic operations
 */
class Calculator {
  /**
   * Add two numbers
   * @param a - First number
   * @param b - Second number
   * @returns Sum of a and b
   */
  public add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtract two numbers
   * @param a - First number
   * @param b - Second number
   * @returns Difference of a and b
   */
  public subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiply two numbers
   * @param a - First number
   * @param b - Second number
   * @returns Product of a and b
   */
  public multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divide two numbers
   * @param a - First number
   * @param b - Second number
   * @returns Quotient of a and b
   * @throws Error when dividing by zero
   */
  public divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  /**
   * Calculate percentage
   * @param value - The value
   * @param percentage - The percentage
   * @returns Percentage of the value
   */
  public percentage(value: number, percentage: number): number {
    return (value * percentage) / 100;
  }

  /**
   * Calculate power
   * @param base - Base number
   * @param exponent - Exponent
   * @returns Base raised to the power of exponent
   */
  public power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  /**
   * Calculate square root
   * @param value - The value
   * @returns Square root of the value
   * @throws Error when calculating square root of negative number
   */
  public sqrt(value: number): number {
    if (value < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(value);
  }
}

// Create an instance to demonstrate usage and avoid unused-vars warning
const calculator = new Calculator();

// Export both class and instance for use in other modules
export { Calculator, calculator };
export default Calculator;
