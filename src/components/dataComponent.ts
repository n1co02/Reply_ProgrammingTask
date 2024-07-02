import fs from 'fs';
import path from 'path';
const dataFilePath = path.join(__dirname, '../database/data.json');

export const loadData = (): Data => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error instanceof SyntaxError) throw new Error('Invalid JSON in data file');
    throw new Error('Error reading data file');
  }
};
export const saveData = (data: Data): void => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
};
