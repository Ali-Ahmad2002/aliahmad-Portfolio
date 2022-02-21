import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkSectionComponent } from './my-work-section.component';

describe('MyWorkSectionComponent', () => {
  let component: MyWorkSectionComponent;
  let fixture: ComponentFixture<MyWorkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
