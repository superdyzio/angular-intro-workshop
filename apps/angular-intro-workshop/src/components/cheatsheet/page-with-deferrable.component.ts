import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PolarChartComponent } from '../polar-chart/polar-chart.component';
import { CountDownComponent } from '../count-down/count-down.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { LongLoadingComponent } from '../long-loading/long-loading.component';
import { RandomFoxComponent } from '../random-fox/random-fox.component';
import { FatCatComponent } from '../fat-cat/fat-cat.component';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { LoadingComponent } from '../loading/loading.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [
    FormsModule,
    CountDownComponent,
    PolarChartComponent,
    BarChartComponent,
    LongLoadingComponent,
    RandomFoxComponent,
    FatCatComponent,
    PlaceholderComponent,
    LoadingComponent,
  ],
  templateUrl: './page-with-deferrable.component.html',
  styleUrl: './page-with-deferrable.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWithDeferrableComponent {
  customCondition = false;
}
