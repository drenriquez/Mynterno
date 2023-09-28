const fs = require('fs');
const path = require('path');

const { app } = require('electron');
const documentsPath = app.getPath('documents');
const bricDashboardPath = path.join(documentsPath, 'bricDashboard');
const schemaFilePath = path.join(bricDashboardPath, 'schema.json');


function create_folder_and_schema (){
  if (!fs.existsSync(bricDashboardPath)) {
    fs.mkdirSync(bricDashboardPath);
  }

  if (!fs.existsSync(schemaFilePath)) {
    const defaultSchema = { /* inserire qui lo schema predefinito */ };
    fs.writeFileSync(schemaFilePath, JSON.stringify(defaultSchema));
  }
}

module.exports = {
  create_folder_and_schema
};
