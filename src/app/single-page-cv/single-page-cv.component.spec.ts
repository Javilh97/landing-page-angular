import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageCvComponent } from './single-page-cv.component';

describe('SinglePageCvComponent', () => {
  let component: SinglePageCvComponent;
  let fixture: ComponentFixture<SinglePageCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePageCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
