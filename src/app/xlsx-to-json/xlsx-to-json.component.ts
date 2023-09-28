import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-xlsx-to-json',
  templateUrl: './xlsx-to-json.component.html',
  styleUrls: ['./xlsx-to-json.component.scss']
})
export class XlsxToJsonComponent {
  dataFromFile:any;
  fileName=this.dataService.getFilename();
  panelOpenState = false;
  constructor(private dataService: DataService) {};
  handleFileDrop(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      //const data = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
      console.log(data);
      this.dataFromFile=data;
      this.fileName=file.name;
      this.dataService.setFilename(file.name);
      console.log(file.name);
      console.log(file.type);
      console.log(file.size);
      console.log(file);
      this.dataService.setData(data);
    };
    reader.readAsBinaryString(file);
  }

}
