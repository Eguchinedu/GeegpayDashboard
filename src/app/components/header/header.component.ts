import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() header = '';

  currentDate: string | null;
  changeBtn: boolean = false;

  constructor(
    private datePipe: DatePipe,
    public darkModeService: DarkModeService
  ) {
    this.currentDate = this.datePipe.transform(new Date(), 'MMMM d, yyyy');
  }
  changeBtnState() {
    this.changeBtn = !this.changeBtn;
  }
}
