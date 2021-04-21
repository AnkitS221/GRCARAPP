import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as HighCharts from 'highcharts';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  title = 'Company Hiring Report';
  type = 'ColumnChart';
  data = [
     ["2014", 200],
     ["2015", 560],
     ["2016", 280],
     ["2017", 300],
     ["2018", 600]
  ];
  columnNames = ['Year', 'India'];
  options = {};
  width = 600;
  height = 400;
  constructor(private activatedRoute: ActivatedRoute, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    // this.barChartPopulation();
    // this.pieChartBrowser();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  barChartPopulation() {
    let myChart = HighCharts.chart('barChart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }

  pieChartBrowser() {
    console.log(
      Array.from({ length: 12 }, () => Math.floor(Math.random() * 90 + 10))
    );
    HighCharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Browser market shares in October, 2019',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          type: undefined,
          data: [
            {
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: 'Internet Explorer',
              y: 11.84,
            },
            {
              name: 'Firefox',
              y: 10.85,
            },
            {
              name: 'Edge',
              y: 4.67,
            },
            {
              name: 'Safari',
              y: 4.18,
            },
            {
              name: 'Sogou Explorer',
              y: 1.64,
            },
            {
              name: 'Opera',
              y: 1.6,
            },
            {
              name: 'QQ',
              y: 1.2,
            },
            {
              name: 'Other',
              y: 2.61,
            },
          ],
        },
      ],
    });
  }
}
