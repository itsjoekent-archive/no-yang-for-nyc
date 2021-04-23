import fs from 'fs';
import path from 'path';
import parse from 'csv-parse/lib/sync';

const fsPromises = fs.promises;

export async function loadContentFile(fileName) {
  const filePath = path.join(process.cwd(), `content/${fileName}.csv`);
  const fileContents = await fsPromises.readFile(filePath, 'utf8');

  return parse(fileContents, { columns: true });
}

export default async function loadContent() {
  const facts = await loadContentFile('facts');

  const siteRaw = await loadContentFile('site');
  const site = siteRaw.reduce((acc, row) => ({
    ...acc,
    [row['']]: row,
  }), {});


  return { facts, site };
}
