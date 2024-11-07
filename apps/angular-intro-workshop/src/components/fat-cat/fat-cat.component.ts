import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-fat-cat',
  standalone: true,
  imports: [],
  template: `<img
      [style.maxWidth]="'100%'"
      [style.maxHeight]="'100%'"
      src="cats.jpg"
      alt="image of cats"
    />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FatCatComponent  {
}
