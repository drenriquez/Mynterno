import { Component, Input } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-table-excel',
  templateUrl: './table-excel.component.html',
  styleUrls: ['./table-excel.component.scss']
})
export class TableExcelComponent {
  @Input() dataXlsx: any[] = [];
  columns: string[] = [];
  selectedRowIndices: number[] = [];
  selectAll: boolean = true;
  isLoading: boolean = false;

  constructor(private dataService: DataService){
  }
  ngOnInit(): void {
   if(this.dataXlsx==undefined){
    this.dataXlsx=this.dataService.getData();
   }



  }
  ngOnChanges(): void {
    this.dataXlsx=this.dataService.getData();
    this.columns = this.dataXlsx[0];
    this.selectAll = true;
    this.selectedRowIndices = [...Array(this.dataXlsx.length ).keys()];
  }

  toggleSelectAll(): void {
    if (this.selectAll) {
      this.selectedRowIndices = [...Array(this.dataXlsx.length).keys()];
    } else {
      this.selectedRowIndices = [];
    }
  }

  isSelected(index: number): boolean {
    return this.selectedRowIndices.includes(index);
  }

  testSelect(i: number):void{
    console.log(i,this.selectedRowIndices)
    const found = this.selectedRowIndices.includes(i);
    if(found){
      const index = this.selectedRowIndices.indexOf(i)
      this.selectedRowIndices.splice(index, 1);
      console.log(this.selectedRowIndices)
    }
    else{
      this.selectedRowIndices.push(i);
      this.selectedRowIndices.sort((a, b) => a - b);
      console.log(this.selectedRowIndices)
    }
  }
  saveSelectedRows(): void {
    const selectedRows = this.selectedRowIndices.map(index => this.dataXlsx[index]);
    console.log(selectedRows);
    this.dataService.setData(selectedRows)
    this.isLoading=true;
    setTimeout(()=>{this.isLoading=false},1000)
  }
}
