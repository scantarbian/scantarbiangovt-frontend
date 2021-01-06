import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdpInfoComponent } from './gdp-info.component';

describe('GdpInfoComponent', () => {
  let component: GdpInfoComponent;
  let fixture: ComponentFixture<GdpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdpInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
