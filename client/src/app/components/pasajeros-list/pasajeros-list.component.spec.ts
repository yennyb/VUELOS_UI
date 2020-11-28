import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajerosListComponent } from './pasajeros-list.component';

describe('PasajerosListComponent', () => {
  let component: PasajerosListComponent;
  let fixture: ComponentFixture<PasajerosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajerosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
