import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObervableComponent } from './custom-obervable.component';

describe('CustomObervableComponent', () => {
  let component: CustomObervableComponent;
  let fixture: ComponentFixture<CustomObervableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomObervableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomObervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
