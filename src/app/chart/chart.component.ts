import { Component, OnInit } from '@angular/core';
import { chartData } from '../../assets/chart-data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  public options: any;

  constructor() {}

  ngOnInit(): void {
    this.options = {
      xAxis: {
        data: chartData.xAxisData,
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: chartData.values,
        },
      ],
    };
  }
}
