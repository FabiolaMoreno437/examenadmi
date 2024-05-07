import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta1ScreenComponent } from './pregunta1-screen.component';

describe('Pregunta1ScreenComponent', () => {
  let component: Pregunta1ScreenComponent;
  let fixture: ComponentFixture<Pregunta1ScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pregunta1ScreenComponent]
    });
    fixture = TestBed.createComponent(Pregunta1ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
