import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-amount-panel',
  templateUrl: './total-amount-panel.component.html',
  styleUrls: ['./total-amount-panel.component.scss']
})
export class TotalAmountPanelComponent {

  @Input() totalAmount!: number | null;

  panelOpenState = false;
}
