import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ServiceService } from 'src/app/service/service.service';
Chart.register(...registerables);

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

  constructor(private _barService: ServiceService) {}
  ngOnInit(): void {
    this._barService.showData().subscribe((data) => {
      this.data = data;

      if (this.data != null) {
        for (let i = 0; i < this.data.length; i++) {
          this.datamonth.push(this.data[i].month);
          this.dataamount.push(this.data[i].amount);
          this.datacolor.push(this.data[i].color);
          this.databorder.push(this.data[i].borderColor);
        }
      }
    });
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
        responsive: true,
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
