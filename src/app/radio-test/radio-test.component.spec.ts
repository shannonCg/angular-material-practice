import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioTestComponent } from './radio-test.component';

describe('RadioTestComponent', () => {
  let component: RadioTestComponent;
  let fixture: ComponentFixture<RadioTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
