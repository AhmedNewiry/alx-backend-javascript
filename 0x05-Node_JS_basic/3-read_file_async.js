const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');
        console.log(`Number of students: ${students.length}`);
        const fieldMap = {};
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fieldMap[field]) {
            fieldMap[field] = [];
          }
          fieldMap[field].push(firstname);
        });
        Object.keys(fieldMap).forEach((field) => {
          const studentsInField = fieldMap[field];
          console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
