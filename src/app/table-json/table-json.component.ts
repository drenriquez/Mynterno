import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-table-json',
  templateUrl: './table-json.component.html',
  styleUrls: ['./table-json.component.scss'],
})
export class TableJsonComponent {

  @Input() dataJson: any[] = [];

  constructor(private dataService: DataService){
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Controlla se il valore di dataJson è cambiato tra le modifiche di input
    if (changes['dataJson']) {
      console.log('########### change ###############')
      // Aggiorna il valore di dataJson con il nuovo valore
      this.dataJson = changes['dataJson'].currentValue;
    }
  }
}
