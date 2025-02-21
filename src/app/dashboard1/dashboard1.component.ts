import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ArcElement, BarController, BarElement, CategoryScale, ChartConfiguration, DoughnutController, Filler, Legend, LinearScale, LineController, LineElement, PieController, PointElement, RadarController, RadialLinearScale, Title, Tooltip } from 'chart.js';

import { Chart } from 'chart.js';

Chart.register(ArcElement, CategoryScale, Tooltip, Legend, Title, PieController, BarController, BarElement, LinearScale, LineElement, RadarController, LineController, PointElement, RadialLinearScale, DoughnutController, Filler);

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    
  ]
})
export class Dashboard1Component implements AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);

  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Concesiones por región', cols: 1, rows: 1, chartId: 'grafico1', chartType: 'bar', data: this.getBarChartData() },
          { title: 'Concesiones bloqueadas por area', cols: 1, rows: 1, chartId: 'grafico2', chartType: 'line', data: this.getLineChartData() },
          { title: 'Conceciones totales', cols: 1, rows: 1, chartId: 'grafico3', chartType: 'pie', data: this.getPieChartData() },
          { title: 'Concesiones por genero', cols: 1, rows: 1, chartId: 'grafico4', chartType: 'doughnut', data: this.getDoughnutChartData() }
        ];
      }

      return [
        { title: 'Concesiones por región', cols: 2, rows: 1, chartId: 'grafico1', chartType: 'bar', data: this.getBarChartData() },
        { title: 'Concesiones bloqueadas por area', cols: 1, rows: 1, chartId: 'grafico2', chartType: 'line', data: this.getLineChartData() },
        { title: 'Concesiones totales', cols: 1, rows: 2, chartId: 'grafico3', chartType: 'pie', data: this.getPieChartData() },
        { title: 'Concesiones por genero', cols: 1, rows: 1, chartId: 'grafico4', chartType: 'doughnut', data: this.getDoughnutChartData() }
      ];
    })
  );

  
  private initChart(chartId: string, chartType: any, chartData: any) {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;

    // const data = {
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [{
    //     data: [12,19,3,5,2,3],
    //     backgroundColor: ['#FF0000', '#0000FF', '#FFFF00', '#00FF00', '#800080', '#FFA500'],
    //     hoverBackGroundColor: ['#FF6347', '#4682B4', '#FFFF99', '#32CD32', '#BA55D3', '#FF7F50']
    //   }]
    // };

    const chart = new Chart(ctx, {
      type: chartType, // Recibe el tipo de grafico desde el array de cards.
      data: chartData, // Recibe la informacion correspondiente a cada card
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.cards.subscribe(cards => {
      cards.forEach(card => {
        // Se incializa cada grafico tomando en cuenta el Id de la card y el tipo de grafico y datos asociados
        this.initChart(card.chartId, card.chartType, card.data); 
      });
    });
  }

  // Funciones para cargar los datos a cada grafico
  getPieChartData() {
    return {
      labels: ['Bloqueadas', 'Activas'],
      datasets: [{
        data: [8000, 40000],
        backgroundColor: ['red', 'green'],
        hoverBackgroundColor: ['red','green']
      }]
    };
  }

  getLineChartData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true
      }]
    };
  }

  getBarChartData() {
    return {
      labels: ['Cañada', 'Mixteca', 'Valles Centrales', 'Costa', 'Sierra Norte', 'Sierra Sur', 'Istmo', 'Papaloapan'],
      datasets: [{
        label: 'Regiones',
        data: [5000, 7000, 8000, 5500, 6200, 4800, 6500, 5000],
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1
      }]
    };
  }

  getDoughnutChartData() {
    return {
      labels: ['Hombre', 'Mujer'],
      datasets: [{
        label: 'Concesiones',
        data: [37500, 10500],
        backgroundColor: [
          '#36a2eb',
          'rgb(255, 99, 132)',
        ],
        borderColor: ['#36a2eb','#FF5733'],
        borderWidth: 1
      }]
    };
  }

}
