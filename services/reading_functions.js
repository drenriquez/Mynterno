const fs = require('fs');
const path = require('path');
const { app } = require('electron');


async function readSchema() {
  console.log('reading_function.js  ---readSchema------');
  const documentsPath = app.getPath('documents');
  const bricDashboardPath = path.join(documentsPath, 'bricDashboard');
  const pathSchema = path.join(bricDashboardPath, 'schema.json');
  //const pathSchema = path.join(__dirname, 'schema.json');

  return new Promise((resolve, reject) => {
    fs.readFile(pathSchema, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      // Analizza i dati del file JSON
      const jsonData = JSON.parse(data);
      // Usa i dati come necessario
      //console.log(jsonData);
      resolve(jsonData);
    });
  });
}


function readRow(row) {
  // il corpo della funzione
  console.log('reading_function.js  ---readRow------');
}

module.exports = {
  readRow,
  readSchema
};
