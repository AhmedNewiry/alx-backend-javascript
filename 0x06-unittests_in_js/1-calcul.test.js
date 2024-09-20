const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // Tests for SUM
  describe('SUM', () => {
    it('should return 6 when 1.4 and 4.5 are summed', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when 1.2 and 3.7 are summed', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  // Tests for SUBTRACT
  describe('SUBTRACT', () => {
    it('should return -4 when 1.4 is subtracted from 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 1 when 4.5 is subtracted from 3.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 3.5), 1);
    });
  });

  // Tests for DIVIDE
  describe('DIVIDE', () => {
    it('should return 0.2 when 1.4 is divided by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when divided by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 1 when 4.5 is divided by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.5), 1);
    });
  });

  // Test for invalid operation type
  it('should throw an error for an invalid operation type', () => {
    assert.throws(() => {
      calculateNumber('MULTIPLY', 1.4, 4.5);
    }, Error);
  });
});
