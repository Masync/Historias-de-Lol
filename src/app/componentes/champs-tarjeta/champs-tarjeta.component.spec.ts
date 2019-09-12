import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampsTarjetaComponent } from './champs-tarjeta.component';

describe('ChampsTarjetaComponent', () => {
  let component: ChampsTarjetaComponent;
  let fixture: ComponentFixture<ChampsTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampsTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampsTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
