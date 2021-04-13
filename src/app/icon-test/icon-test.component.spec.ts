import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTestComponent } from './icon-test.component';

describe('IconTestComponent', () => {
  let component: IconTestComponent;
  let fixture: ComponentFixture<IconTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
