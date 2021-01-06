import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconCoreComponent } from './econ-core.component';

describe('EconCoreComponent', () => {
  let component: EconCoreComponent;
  let fixture: ComponentFixture<EconCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
