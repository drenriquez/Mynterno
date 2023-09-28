import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerJsonSchemaComponent } from './visualizer-json-schema.component';

describe('VisualizerJsonSchemaComponent', () => {
  let component: VisualizerJsonSchemaComponent;
  let fixture: ComponentFixture<VisualizerJsonSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizerJsonSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizerJsonSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
