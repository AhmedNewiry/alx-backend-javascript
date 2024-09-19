import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export async function readDatabase(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    const students = {};

    for (const line of lines) {
      const [firstname, field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }

    return students;
  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
}
