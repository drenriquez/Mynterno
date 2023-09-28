import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron-fresh';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { MaterialFileInputModule } from 'ngx-material-file-input';
//import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import {ClipboardModule} from '@angular/cdk/clipboard';

import { HomeComponent } from './home/home.component';
import { XlsxToJsonComponent } from './xlsx-to-json/xlsx-to-json.component';
import { TableExcelComponent } from './table-excel/table-excel.component';
import { JsonGeneratorComponent } from './json-generator/json-generator.component';
import { VisualizerJsonSchemaComponent } from './visualizer-json-schema/visualizer-json-schema.component';
import { TableJsonComponent } from './table-json/table-json.component';
import { RemoteDatabaseComponent } from './remote-database/remote-database.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    XlsxToJsonComponent,
    TableExcelComponent,
    JsonGeneratorComponent,
    VisualizerJsonSchemaComponent,
    TableJsonComponent,
    RemoteDatabaseComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    NgxFileDropModule,
    BrowserModule,
    NgxJsonViewerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
