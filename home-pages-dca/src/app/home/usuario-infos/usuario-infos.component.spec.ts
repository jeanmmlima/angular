import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInfosComponent } from './usuario-infos.component';

describe('UsuarioInfosComponent', () => {
  let component: UsuarioInfosComponent;
  let fixture: ComponentFixture<UsuarioInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
