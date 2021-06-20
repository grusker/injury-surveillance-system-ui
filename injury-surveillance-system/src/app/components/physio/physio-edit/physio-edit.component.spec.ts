import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioEditComponent } from './physio-edit.component';

describe('PhysioEditComponent', () => {
  let component: PhysioEditComponent;
  let fixture: ComponentFixture<PhysioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
