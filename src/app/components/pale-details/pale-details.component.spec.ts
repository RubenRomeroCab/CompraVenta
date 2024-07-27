import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaleDetailsComponent } from './pale-details.component';

describe('PaleDetailsComponent', () => {
  let component: PaleDetailsComponent;
  let fixture: ComponentFixture<PaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
