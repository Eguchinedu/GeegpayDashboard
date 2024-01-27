import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.css'],
})
export class CardTwoComponent {
  constructor(public darkModeService: DarkModeService) {}
}
