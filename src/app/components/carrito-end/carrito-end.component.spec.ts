import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoEndComponent } from './carrito-end.component';

describe('CarritoEndComponent', () => {
  let component: CarritoEndComponent;
  let fixture: ComponentFixture<CarritoEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
