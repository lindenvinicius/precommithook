'use strict';

class Calculator {
  static add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a + b;
  }

  static subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a - b;
  }

  static multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a * b;
  }

  static divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  static percentage(value, pct) {
    if (typeof value !== 'number' || typeof pct !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return (value * pct) / 100;
  }

  static power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return Math.pow(base, exponent);
  }

  static sqrt(value) {
    if (typeof value !== 'number') {
      throw new Error('Argument must be a number');
    }
    if (value < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(value);
  }
}

module.exports = Calculator; // or `export default Calculator` in ESM
