const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    if (!data) throw new Error('Cannot load the database');
    const lines = data.split('\n');
    const students = lines.slice(1).filter(line => line.trim() !== '');
    console.log(`Number of students: ${students.length}`);
    const fieldMap = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstname);
    });
    for (const [field, studentsInField] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
