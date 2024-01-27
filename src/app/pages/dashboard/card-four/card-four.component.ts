import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

export interface Platform {
  name: string;
  progress: number;
  amount: number;
  percent: number
}

@Component({
  selector: 'app-card-four',
  templateUrl: './card-four.component.html',
  styleUrls: ['./card-four.component.css'],
})
export class CardFourComponent {
  constructor(public darkModeService: DarkModeService) {}
  topPlatforms: Platform[] = [
    {
      name: 'Book Bazaar',
      progress: 50,
      amount: 2500000,
      percent: 15,
    },
    {
      name: 'Artisan Aisle',
      progress: 40,
      amount: 1800000,
      percent: 10,
    },
    {
      name: 'Toy Troop',
      progress: 24,
      amount: 1200000,
      percent: 8,
    },
    {
      name: 'X store',
      progress: 80,
      amount: 2000000,
      percent: 20,
    },
  ];

  getColorClass(percentage: number): string {
    if (percentage < 30) {
      return 'red';
    } else if (percentage < 50) {
      return 'orange';
    } else if (percentage < 75) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}
