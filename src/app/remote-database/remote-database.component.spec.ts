import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDatabaseComponent } from './remote-database.component';

describe('RemoteDatabaseComponent', () => {
  let component: RemoteDatabaseComponent;
  let fixture: ComponentFixture<RemoteDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
