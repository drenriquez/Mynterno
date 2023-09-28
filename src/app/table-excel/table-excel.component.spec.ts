import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExcelComponent } from './table-excel.component';

describe('TableExcelComponent', () => {
  let component: TableExcelComponent;
  let fixture: ComponentFixture<TableExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
