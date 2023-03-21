import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervationComponent } from './rezervation.component';

describe('RezervationComponent', () => {
  let component: RezervationComponent;
  let fixture: ComponentFixture<RezervationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
