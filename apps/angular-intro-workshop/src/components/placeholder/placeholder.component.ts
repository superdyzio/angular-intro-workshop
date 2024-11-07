import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [],
  template: `<div
    class="placeholder"
  >
    <svg
      fill="gray"
      stroke="gray"
      stroke-width="0"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMinYMin"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path [attr.d]="path()" />
    </svg>
    <div class="placeholder-text"><ng-content></ng-content></div>
  </div> `,

  styleUrl: './placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderComponent {
  width = input(300);
  height = input(150);
  type = input.required<'barChart' | 'polarChart' | 'image'>();

  path = computed(() => {
    switch (this.type()) {
      case 'barChart':
        return this.barChartPath;
      case 'polarChart':
        return this.polarChartPath;
      case 'image':
        return this.imagePlaceholderPath;
    }
  });

  barChartPath =
    'M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z';

  polarChartPath =
    'M19.744 21.158c-2.09 1.77-4.79 2.842-7.744 2.842-6.627 0-12-5.373-12-12 0-6.29 4.842-11.44 11-11.95v12.364l8.744 8.744zm-6.744-19.107c5.046.503 9 4.772 9 9.949 0 2.397-.85 4.6-2.262 6.324l1.42 1.42c1.77-2.09 2.842-4.79 2.842-7.744 0-6.29-4.842-11.44-11-11.95v2.001z';

  imagePlaceholderPath =
    'M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z';
}
