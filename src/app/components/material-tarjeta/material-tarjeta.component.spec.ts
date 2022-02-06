import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTarjetaComponent } from './material-tarjeta.component';

describe('MaterialTarjetaComponent', () => {
  let component: MaterialTarjetaComponent;
  let fixture: ComponentFixture<MaterialTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
