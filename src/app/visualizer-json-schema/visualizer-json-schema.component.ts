import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-visualizer-json-schema',
  templateUrl: './visualizer-json-schema.component.html',
  styleUrls: ['./visualizer-json-schema.component.scss']
})
export class VisualizerJsonSchemaComponent {
  constructor(private dataService: DataService){
  }
  jsonData=this.dataService.getSchema();
  jsonData2 = JSON.stringify(this.jsonData, null, 2);

  onDataChanged(event: Event) {
    const newValue = (event.target as HTMLTextAreaElement).value;
    try {
      this.jsonData = JSON.parse(newValue);
      this.jsonData2 = JSON.stringify(this.jsonData, null, 2);
    } catch (error) {
      console.error('Invalid JSON: ', error);
    }
  }

  saveData() {
    this.dataService.setSchema(this.jsonData)
  }
}
