import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiesaLibComponent } from './liesa-lib.component';

describe('LiesaLibComponent', () => {
  let component: LiesaLibComponent;
  let fixture: ComponentFixture<LiesaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiesaLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiesaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
