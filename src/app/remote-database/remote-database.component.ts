import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';
import { ElectronService } from 'ngx-electron-fresh';

@Component({
  selector: 'app-remote-database',
  templateUrl: './remote-database.component.html',
  styleUrls: ['./remote-database.component.scss']
})
export class RemoteDatabaseComponent {

  
  dataExcel = this.dataService.getData() ? this.dataService.getData() : [];

  constructor(private dataService: DataService, private electronService: ElectronService) {
    this.electronService.ipcRenderer.on('resultTablesGenerator', (event, arg) => {
      console.log('-------------ricevuto da ipcMain in resultTablesGenerator -----------');
      console.log(arg);
      dataService.setTablesGenerated(arg);

    });
    electronService.ipcRenderer.on('resultSaveTables',(event,res)=>{
      for (let tab of res){
        const nameTable=Object.keys(tab)[0];
        const arrayTable=Object.values(tab)[0];
        const dataOne = JSON.stringify(arrayTable,null,'\t');
        console.log(nameTable,dataOne)

      }
      //console.log(res);
    })
  }

  onFileSelected(event: any) {
   const selectedFile = event.target.files[0];

    // Create a FileReader object
    const fileReader = new FileReader();

    // Set up an event listener for when the FileReader has loaded the file
    fileReader.onload = (e) => {
      const fileContent = fileReader.result as string;
      const jsonData = JSON.parse(fileContent);
      console.log(jsonData);
    };

    // Read the selected file as text
    fileReader.readAsText(selectedFile);
  }
  PDFgenerator(){
    console.log(this.dataExcel)
    this.electronService.ipcRenderer.send('PDFgenerator', this.dataExcel);
  }


}
