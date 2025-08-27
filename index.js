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
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a + b;
  }

  /**
   * Subtract two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a - b;
  }

  /**
   * Multiply two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a * b;
  }

  /**
   * Divide two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Quotient of a and b
   */
  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  /**
   * Calculate percentage
   * @param {number} value - The value
   * @param {number} percentage - The percentage
   * @returns {number} Percentage of the value
   */
  percentage(value, percentage) {
    if (typeof value !== 'number' || typeof percentage !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return (value * percentage) / 100;
  }

  /**
   * Calculate power
   * @param {number} base - Base number
   * @param {number} exponent - Exponent
   * @returns {number} Base raised to the power of exponent
   */
  power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return Math.pow(base, exponent);
  }

  /**
   * Calculate square root
   * @param {number} value - The value
   * @returns {number} Square root of the value
   */
  sqrt(value) {
    if (typeof value !== 'number') {
      throw new Error('Argument must be a number');
    }
    if (value < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(value);
  }
}
