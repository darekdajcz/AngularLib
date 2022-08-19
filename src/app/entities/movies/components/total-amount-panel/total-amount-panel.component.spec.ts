import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountPanelComponent } from './total-amount-panel.component';

describe('TotalAmountPanelComponent', () => {
  let component: TotalAmountPanelComponent;
  let fixture: ComponentFixture<TotalAmountPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAmountPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalAmountPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
