import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron-fresh';
import { DataService } from './service/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'electronstart';


  constructor(private electronService: ElectronService, private dataService: DataService){
    this.electronService.ipcRenderer.on('resultIpcMainReadSchema',(event, arg)=>{
      console.log('----ricevuto da ipcMain in resultIpcMainReadSchema -----',arg)
      this.dataService.setSchema(arg);
    })
  }

  ngOnInit(): void {
    console.log('schema attend');
    this.electronService.ipcRenderer.send('readSchema');
      console.log('schema attend');
  };

}
