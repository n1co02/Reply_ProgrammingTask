import fs from 'fs';
import path from 'path';
const dataFilePath = path.join(__dirname, '../database/data.json');

export const loadData = (): Data => {
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(data);
};
export const saveData = (data: Data): void => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
};
