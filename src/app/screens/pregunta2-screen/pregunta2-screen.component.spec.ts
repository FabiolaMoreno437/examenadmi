import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta2ScreenComponent } from './pregunta2-screen.component';

describe('Pregunta2ScreenComponent', () => {
  let component: Pregunta2ScreenComponent;
  let fixture: ComponentFixture<Pregunta2ScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pregunta2ScreenComponent]
    });
    fixture = TestBed.createComponent(Pregunta2ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
