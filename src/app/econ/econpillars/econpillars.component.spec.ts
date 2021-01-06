import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconpillarsComponent } from './econpillars.component';

describe('EconpillarsComponent', () => {
  let component: EconpillarsComponent;
  let fixture: ComponentFixture<EconpillarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconpillarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconpillarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
