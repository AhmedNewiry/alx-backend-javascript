import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const studentsByField = Object.entries(data).sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB));

      let response = 'This is the list of our students\n';
      studentsByField.forEach(([field, names]) => {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(process.argv[2]);
      const names = data[major] || [];

      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
