import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlsxToJsonComponent } from './xlsx-to-json.component';

describe('XlsxToJsonComponent', () => {
  let component: XlsxToJsonComponent;
  let fixture: ComponentFixture<XlsxToJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XlsxToJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XlsxToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
