import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePicturesComponent } from './change-pictures.component';

describe('ChangePicturesComponent', () => {
  let component: ChangePicturesComponent;
  let fixture: ComponentFixture<ChangePicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
