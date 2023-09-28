import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private globalData: any;
  private schema:any;
  private filenameExcel='';
  private tablesGenerated=[];

  constructor() { }

  getData(): any {
    return this.globalData;
  }

  setData(data: any): void {
    this.globalData = data;
  }

  getSchema(): any {
    return this.schema;
  }

  setSchema(data: any): void {
    this.schema = data;
  }

  getFilename(){
    return this.filenameExcel
  }

  setFilename(data: any): void{
    this.filenameExcel = data
  }

  getTablesGenerated(){
    return this.tablesGenerated
  }

  setTablesGenerated(data: any): void{
    this.tablesGenerated = data
  }

}
