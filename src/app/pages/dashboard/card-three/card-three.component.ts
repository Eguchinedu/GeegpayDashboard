import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  img: string;
  date: string | null;
  amount: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    img: '../../../../assets/images/marcus.png',
    name: 'Marcus Bergson',
    date: 'Nov 15, 2023',
    amount: 80000,
    status: 'Paid',
  },
  {
    img: '../../../../assets/images/jaydon.png',
    name: 'Jaydon Vaccaro',
    date: 'Nov 15, 2023',
    amount: 150000,
    status: 'Refunded',
  },
  {
    img: '../../../../assets/images/corey.png',
    name: 'Corey Schleifer',
    date: 'Nov 15, 2023',
    amount: 87000,
    status: 'Paid',
  },
  {
    img: '../../../../assets/images/cooper.png',
    name: 'Cooper Press',
    date: 'Nov 15, 2023',
    amount: 100000,
    status: 'Refunded',
  },
  {
    img: '../../../../assets/images/philip.png',
    name: 'Phillip Lubin',
    date: 'Nov 15, 2023',
    amount: 78000,
    status: 'Paid',
  },
];

@Component({
  selector: 'app-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.css'],
})
export class CardThreeComponent {
  displayedColumns: string[] = ['name', 'date', 'amount', 'status', 'invoice'];
  dataSource = ELEMENT_DATA;
}
