import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { ServiceService } from 'src/app/service/service.service';
Chart.register(...registerables);

const chartData = [
  {
    month: 'Jan',
    amount: 6000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Feb',
    amount: 20000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Mar',
    amount: 3000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Apr',
    amount: 25000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'May',
    amount: 8000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Jun',
    amount: 45000,
    color: 'rgba(52, 202, 165, 1)',
    borderColor: 'rgba(52, 202, 165, 1)',
  },
  {
    month: 'Jul',
    amount: 8000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Aug',
    amount: 22000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Sep',
    amount: 35000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Oct',
    amount: 4000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Nov',
    amount: 30000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
  {
    month: 'Dec',
    amount: 25000,
    color: 'rgba(52, 202, 165, 0.1)',
    borderColor: 'rgba(52, 202, 165, 0.1)',
  },
];

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.css'],
})
export class CardOneComponent implements OnInit {
  data: any;
  dataamount: any[] = [];
  datamonth: any[] = [];
  datacolor: any[] = [];
  databorder: any[] = [];

  constructor(
    private _barService: ServiceService,
    public darkModeService: DarkModeService
  ) {}
  ngOnInit(): void {
    for (let i = 0; i < chartData.length; i++) {
      this.datamonth.push(chartData[i].month);
      this.dataamount.push(chartData[i].amount);
      this.datacolor.push(chartData[i].color);
      this.databorder.push(chartData[i].borderColor);
    }
    // this._barService.showData().subscribe((data) => {
    //   this.data = data;
    //   console.log(data);

    //   if (this.data != null) {
    //     for (let i = 0; i < this.data.length; i++) {
    //       this.datamonth.push(this.data[i].month);
    //       this.dataamount.push(this.data[i].amount);
    //       this.datacolor.push(this.data[i].color);
    //       this.databorder.push(this.data[i].borderColor);
    //     }
    //   }
    // });
    this.showChartData(
      this.datamonth,
      this.dataamount,
      this.datacolor,
      this.databorder
    );
  }

  showChartData(datamonth: any, dataamount: any, color: any, border: any) {
    new Chart('barchart', {
      type: 'bar',
      data: {
        labels: datamonth,
        datasets: [
          {
            data: dataamount,
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor: color,
            borderColor: border,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            yAlign: 'bottom',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
