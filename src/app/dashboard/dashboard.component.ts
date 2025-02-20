import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import ApexCharts from 'apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

export type barChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
}

export type pieChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[];
  title: ApexTitleSubtitle | any;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
}

export type lineChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  title: ApexTitleSubtitle | any;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, MatButtonModule, MatGridListModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild("grafico") grafico!: ChartComponent;
  public barChartOptions!: Partial<barChartOptions>
  public lineChartOptions!: Partial<lineChartOptions>
  public pieChartOptions!: Partial<pieChartOptions>
  barra: boolean = true;
  linea: boolean = false;
  pie: boolean = false;
  constructor(
    
  ){
    //Grafico de barras
    this.barChartOptions = {
      series: [
        {
          name: 'series',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: 'bar'
      },
      title: {
        text: "Grafico con ApexChart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      yaxis: {
        title: {
          text: 'Ventas'
        }
      }
    }

    //Grafico de lineas
    this.lineChartOptions = {
      series: [
        {
          name: 'Visitas',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: 'line'
      },
      title: {
        text: "Grafico de Lineas con ApexChart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    }

    this.pieChartOptions = {
      series: [
        {
          name: 'Visitas',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 200,
        type: 'pie'
      },
      title: {
        text: "Grafico de Lineas con ApexChart"
      },
      labels: ['Producto A', 'Producto B', 'Producto C'],
      plotOptions: {
        pie: {
          expandOnClick: true
        }
      },
      legend: {
        position: 'bottom' //posicion de la leyenda
      },
      tooltip: {
        y: {
          formatter: function (val: number){
            return `${val} %`; //Formatear el tooñtip
          }
        }
      }
    }

  }

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 8, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 8, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  graficoBarra(){
    this.barra = true;
    this.linea = false;
  }

  graficoLinea(){
    this.linea = true;
    this.barra = false;
  }
  
  graficoPie(){
    this.pie = true;
    this.barra = false;
    this.linea = false;
  }

  

}
