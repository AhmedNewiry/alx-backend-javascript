import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n').slice(1);

    const result = {};
    lines.forEach(line => {
      const [firstName, field] = line.split(',');
      if (field) {
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstName);
      }
    });

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
