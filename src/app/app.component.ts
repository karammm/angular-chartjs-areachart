import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public lineChartData: ChartDataSets[] = [
    {
      data: [65, 49, 80, 84, 56, 65, 100],
      label: 'Series A',
    },
  ];

  public lineChartLabels: Label[] = [
    'mon',
    'tue',
    'wed',
    'thru',
    'fri',
    'sat',
    'sun',
  ];

  public lineChartOptions: ChartOptions & { annotation: any } = {
    layout: {
      padding: {
        left: 24,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false,
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          offset: true,
          ticks: {
            padding: 12,
            maxTicksLimit: 7,
            maxRotation: 0,
            minRotation: 0,
            autoSkip: true,
            callback: function (value, index, values) {
              const padding = '',
                lastValue = values.length - 1;
              if (index !== 0 && index !== lastValue) {
                return value;
              } else if (index) {
                return value + padding;
              } else {
                return padding + value;
              }
            },
          },
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
            offsetGridLines: true,
          },
          afterBuildTicks: function (axis) {
            axis.margins.left = '-5px';
            axis.margins.right = '-5px';
          },
        },
      ],
      yAxes: [
        {
          stacked: false,
          position: 'left',
          offset: false,
          ticks: {
            padding: 10,
            autoSkip: true,
            maxTicksLimit: 8,
            callback: function (value: any, index, values) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            },
          },
          gridLines: {
            display: true,
            drawBorder: false,
            drawTicks: true,
          },
        },
      ],
    },
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  };

  public lineChartColors: Color[] = [
    {
      borderColor: '#6200ea',
      backgroundColor: '#f1e9fd',
    },
  ];

  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
