import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: ` <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,

  styleUrl: './loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
