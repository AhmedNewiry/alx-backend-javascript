function calculateNumber(type, a, b) {
  // Round both a and b
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform the operation based on the 'type' argument
  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error'; // Avoid division by zero
    }
    return roundedA / roundedB;
  } else {
    throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
