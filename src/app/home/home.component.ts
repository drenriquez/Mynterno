import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private dataService: DataService/*private electronService: ElectronService*/){
    // this.electronService.ipcRenderer.on('rispostaIpc',()=>{
     //  console.log('+++++++++ricevuto da ipcMain++++++++++')
    // })
   }

   public provaIpc(){
     // if(this.electronService.isElectronApp){//verifica se è una app e non una webapp
     //   this.electronService.ipcRenderer.send('provaIpc');
     //   console.log('button test 0k');
     // }
   }
   loadData(): void {
    const data = this.dataService.getData();
    // usa i dati
    console.log(data);
  }


}
