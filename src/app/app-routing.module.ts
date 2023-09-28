import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { XlsxToJsonComponent } from './xlsx-to-json/xlsx-to-json.component';
import { JsonGeneratorComponent } from './json-generator/json-generator.component';
import { VisualizerJsonSchemaComponent } from './visualizer-json-schema/visualizer-json-schema.component'
import {RemoteDatabaseComponent} from './remote-database/remote-database.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'xlsx-to-json', component: XlsxToJsonComponent },
  { path: 'jsonGenerator', component: JsonGeneratorComponent },
  { path: 'viualizerJson', component: VisualizerJsonSchemaComponent },
  { path: 'remoteDatabase', component: RemoteDatabaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
