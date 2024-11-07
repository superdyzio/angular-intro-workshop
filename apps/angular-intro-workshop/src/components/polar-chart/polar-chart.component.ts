import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { colorsMap } from '../../utils/colors';
import { getRandomElements, getRandomNumber } from '../../utils/random';

@Component({
  selector: 'app-polar-chart',
  standalone: true,
  imports: [],
  template: `<canvas #canvasElement>{{ chart }}</canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolarChartComponent implements AfterViewInit {
  canvasElement = viewChild<ElementRef<HTMLCanvasElement>>('canvasElement');
  chart?: any;

  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private async importChartJs() {
    const { Chart, PolarAreaController, ArcElement, RadialLinearScale } =
      await import('chart.js');

    Chart.register(PolarAreaController, ArcElement, RadialLinearScale);

    return Chart;
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
        },
      ],
    };

    return data;
  }

  private async createBarChart() {
    const Chart = await this.importChartJs();
    const data = this.generateData();

    this.chart = new Chart(this.canvasElement()!.nativeElement, {
      type: 'polarArea',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Polar Area Chart',
          },
        },
      },
    });
  }
}
