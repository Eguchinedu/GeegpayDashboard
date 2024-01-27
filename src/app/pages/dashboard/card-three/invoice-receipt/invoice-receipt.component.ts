import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-invoice-receipt',
  templateUrl: './invoice-receipt.component.html',
  styleUrls: ['./invoice-receipt.component.css'],
})
export class InvoiceReceiptComponent {
  constructor(
    public darkModeService: DarkModeService,
  ) {}
}
