const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  // Tests for SUM
  describe('SUM', () => {
    it('should return 6 when 1.4 and 4.5 are summed', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when 1.2 and 3.7 are summed', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  // Tests for SUBTRACT
  describe('SUBTRACT', () => {
    it('should return -4 when 1.4 is subtracted from 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 1 when 4.5 is subtracted from 3.5', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 3.5)).to.equal(1);
    });
  });

  // Tests for DIVIDE
  describe('DIVIDE', () => {
    it('should return 0.2 when 1.4 is divided by 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
    });

    it('should return "Error" when divided by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 1 when 4.5 is divided by 4.5', () => {
      expect(calculateNumber('DIVIDE', 4.5, 4.5)).to.equal(1);
    });
  });

  // Test for invalid operation type
  it('should throw an error for an invalid operation type', () => {
    expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
  });
});
