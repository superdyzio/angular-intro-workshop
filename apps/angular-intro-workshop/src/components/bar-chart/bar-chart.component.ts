import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { colorsMap } from '../../utils/colors';
import { getRandomElements, getRandomNumber } from '../../utils/random';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  template: `<canvas
    [style.height]="'100%'"
    [style.width]="'100%'"
    #canvasElement
    >{{ chart }}</canvas
  >`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements AfterViewInit {
  canvasElement = viewChild<ElementRef<HTMLCanvasElement>>('canvasElement');
  chart?: any;

  constructor() {
    Chart.register(BarController, BarElement, CategoryScale, LinearScale);
  }

  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private generateData() {
    const randomLabels = getRandomElements(colorsMap, 5);
    const data = {
      labels: randomLabels.map(({ label }) => label),
      datasets: [
        {
          label: 'My beautiful colors',
          data: [...Array(5)].map(() => getRandomNumber(5, 50)),
          backgroundColor: randomLabels.map(
            ({ backgroundColor }) => backgroundColor
          ),
          borderColor: randomLabels.map(({ borderColor }) => borderColor),
          borderWidth: 1,
        },
      ],
    };

    return data;
  }

  private async createBarChart() {
    const data = this.generateData();

    this.chart = new Chart(this.canvasElement()!.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
