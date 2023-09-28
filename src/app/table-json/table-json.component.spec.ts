import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJsonComponent } from './table-json.component';

describe('TableJsonComponent', () => {
  let component: TableJsonComponent;
  let fixture: ComponentFixture<TableJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
