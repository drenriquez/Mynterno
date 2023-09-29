const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const electronReload = require('electron-reloader');
const { readRow, readSchema } = require('./services/reading_functions.js');
const { create_folder_and_schema }= require('./services/create_folder.js');
const { jsonGeneratorForTable } = require('./services/records_generator.js');
const{ saveForSingleTable } = require('./services/saving_function.js');
const { generateAllPDFs }=require('./services/PDFgenerator.js');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: __dirname + '/src/assets/icons/favicon.ico',
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/electronstart/index.html'),
      protocol: 'file',
      slashes: true,
    })
  );
  mainWindow.webContents.openDevTools();
  // Apri il DevTools solo in modalità di sviluppo
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

create_folder_and_schema();

app.whenReady().then(() => {
  createWindow();
  // Abilita il reload automatico solo in modalità di sviluppo
  if (process.env.NODE_ENV === 'development') {
    electronReload(__dirname, {
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    });
  }
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// ipcMain.on('provaIpc',()=>{
//   readRow();
//   console.log('********provaIpc invocata**********');
//   mainWindow.webContents.send('rispostaIpcMainProvaIpc');
// })


ipcMain.on('readXlsx',(event, arg) => {
  console.log('main.js++++++++++ readXlsx activated +++++++++++++++++++++');
  console.log(arg); // Visualizza "World" nella console del renderer process
  readRow(arg);
  mainWindow.webContents.send('rispostaIpcMainReadXlsx');
});

ipcMain.on('readSchema',async (event, arg) => {
  console.log('main.js++++++++++ readSchema activated +++++++++++++++++++++');
  readSchema()
  .then((jsonData) => {
    // Usa il file JSON come necessario
    console.log(jsonData.length);
    mainWindow.webContents.send('resultIpcMainReadSchema',jsonData);
  })
  .catch((err) => {
    // Gestisci l'errore come necessario
    console.error(err);
  });
})

ipcMain.on('tablesGenerator',async (event, array_schema, excelData)=>{
  //jsonGeneratorForTable(array_schema, excelData)
  // .then((jsonDataTables) => {
  //   // Usa il file JSON come necessario
  //   console.log(jsonData.length);
  mainWindow.webContents.send('resultTablesGenerator',jsonGeneratorForTable(array_schema, excelData));
  // })
})
ipcMain.on('saveTables',async (event, jsonData)=>{
  //jsonGeneratorForTable(array_schema, excelData)
  // .then((jsonDataTables) => {
  //   // Usa il file JSON come necessario
  //console.log(jsonData);
  for (let tab of jsonData){
    const nameTable=Object.keys(tab)[0];
    const arrayTable=Object.values(tab)[0];
    console.log(nameTable,arrayTable);
    //const dataOne = JSON.stringify(arrayTable,null,'\t');
    saveForSingleTable(arrayTable,nameTable);
  }
  mainWindow.webContents.send('resultSaveTables', jsonData);
  // })
})
ipcMain.on('PDFgenerator',async (event, dataExcel)=>{
  //jsonGeneratorForTable(array_schema, excelData)
  // .then((jsonDataTables) => {
  //   // Usa il file JSON come necessario
  //console.log(jsonData);
  generateAllPDFs(dataExcel);
  console.log(dataExcel);
})
