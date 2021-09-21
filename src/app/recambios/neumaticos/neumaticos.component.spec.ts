import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumaticosComponent } from './neumaticos.component';

describe('NeumaticosComponent', () => {
  let component: NeumaticosComponent;
  let fixture: ComponentFixture<NeumaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeumaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeumaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
