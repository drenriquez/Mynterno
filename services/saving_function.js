const fs = require('fs');
const path = require('path');
const { app } = require('electron');

function saveForSingleTable(objJSON,name){
  const dataOne = JSON.stringify(objJSON,null,'\t');
  const documentsPath = app.getPath('documents');
  const bricDashboardPath = path.join(documentsPath, 'bricDashboard');
  let dirName="RECORDS";
  const pathDownload=path.join(bricDashboardPath, dirName);
  if(!fs.existsSync(pathDownload)){
    fs.mkdirSync(pathDownload)
  };
  fs.writeFile(`${pathDownload}/${name.toString()}.json`, dataOne, function (err) {
    if (err) throw err;
  });
}

module.exports = { saveForSingleTable }
