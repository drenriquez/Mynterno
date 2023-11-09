const fs = require('fs').promises;
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const { app } = require('electron');


async function generatePDF(data) {
    try {
      const documentsPath = app.getPath('documents');
      const PDFpath = path.join(documentsPath, 'PDfgenerator');

      const PDFfilePathA = path.join(PDFpath, 'test.pdf');
      const PDFfilePathB = path.join(PDFpath, 'testB.pdf');
      console.log("+++++++",PDFfilePathA,"+++++++++++++++++++++++++")
      //const pdfPath = 'C:/Users/utente/Documents/PDFgenerati/test.pdf';
      const pdfBytes = await fs.readFile(PDFfilePathA);
  
      const pdfDoc = await PDFDocument.load(pdfBytes);
     // console.log("++++++++++++++++++++++++ TEST riga 20 ++++++++++++++++++++++++")
      const form = pdfDoc.getForm();
  
      // Campi del PDF 1
      const campo1 = form.getTextField('ID N');//ID N
      const campo2 = form.getTextField('Cognome');//Cognome
      const campo3 = form.getTextField('Nome');//nome
      const campo4 = form.getTextField('Natoa a');//LUOGO DI NASCITA
      const campo5 = form.getTextField('undefined');//PROV
      const campo6 = form.getTextField('il');//data di nascita
      const campo7 = form.getRadioGroup('Sesso');
      const campo8 = form.getCheckBox('Malformazioni o lesioni arto superiore  NO');
      // ... (altri campi)
     // console.log("++++++++++++++++++++++++ TEST riga 21 ++++++++++++++++++++++++")
      campo1.setText(data[12]);
      //console.log("++++++++++++++++++++++++ TEST riga 35 ++++++++++++++++++++++++")
      campo2.setText(data[3]);
      campo3.setText(data[4]);//NOME.
      campo4.setText(data[6]);//Luogo di nascita
      campo5.setText('');//PROV
      campo6.setText(data[5]);//data di nascita
      //campo7.select('M');// da attivare solo se è F
      //campo8.check();//se NO
      //campo8.uncheck()
      // ...
  
      const pdfBytesWithFields = await pdfDoc.save();
      //console.log("++++++++++++++++++++++++ TEST riga 47 ++++++++++++++++++++++++")
  
      //const mainFolderName = `referti_del_${data[11]}`.replace(/\//g, '-');
      const mainFolderName = `${data[13]}`.replace(/\//g, '-');

      const subFolderName = `${data[3]}_${data[4]}`.replace(/\//g, '-');
  
      await fs.mkdir(path.join(PDFpath, mainFolderName), { recursive: true });
      await fs.mkdir(path.join(PDFpath, mainFolderName, subFolderName), { recursive: true });
  
      const outputPath = `${PDFpath}/${mainFolderName}/${subFolderName}/${subFolderName}_HANDGRIP.pdf`;
      await fs.writeFile(outputPath, pdfBytesWithFields);       // ----->           salva il file  
      //console.log("++++++++++++++++++++++++ TEST riga 57 ++++++++++++++++++++++++")
  
      // PDF 2
      //const pdfPath2 = 'C:/Users/utente/Documents/PDFgenerati/testB.pdf';
      const pdfBytes2 = await fs.readFile(PDFfilePathB);
  
      const pdfDoc2 = await PDFDocument.load(pdfBytes2);
      console.log("++++++++++++++++++++++++ TEST riga 64 ++++++++++++++++++++++++")
      const form2 = pdfDoc2.getForm();
  
      // Campi del PDF 2
      const campo1b = form2.getTextField('COGNOME');//COGNOME
      const campo2b = form2.getTextField('DATA DI NASCITA');//DATA DI NASCITA
      const campo3b = form2.getTextField('undefined_2');//PROV
      const campo4b= form2.getTextField('NOME');//LUOGO DI NASCITA
      const campo5b= form2.getTextField('DATA');//DATA
      const campo6b = form2.getTextField('undefined');//NOME
      // ... (altri campi)
  
      campo1b.setText(` ${data[3]}`);
      campo2b.setText(` ${data[5]}`);
      campo3b.setText(``);//Prov.
      campo4b.setText(` ${data[6]}`);//Luogo di nascita
      campo5b.setText(` ${data[13]}`);//DATA
      campo6b.setText(` ${data[4]}`);//nome
      // ...
  
      const pdfBytesWithFields2 = await pdfDoc2.save();
  
      //const outputPath2 = `${PDFpath}/${mainFolderName}/${subFolderName}/${subFolderName}_SCHEDA_MEDICA.pdf`;
      const outputPath2 = `${PDFpath}/${mainFolderName}/${subFolderName}/${subFolderName}_SCHEDA_MEDICA.pdf`;
      await fs.writeFile(outputPath2, pdfBytesWithFields2);
  
      console.log('I PDF sono stati creati con successo.');
    } catch (error) {
      console.error('Si è verificato un errore:', error);
    }
  }
  async function generateAllPDFs(data) {
    for (const element of data) {
      await generatePDF(element);
    }
  }
  module.exports = {
    generateAllPDFs
  };