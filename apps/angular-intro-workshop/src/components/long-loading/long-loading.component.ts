import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-loading',
  standalone: true,
  imports: [],
  template: `<p>long-loading works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LongLoadingComponent implements OnInit {

  ngOnInit(): void {
    this.syncWait(2000);
  }

  private syncWait = (ms: number) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
  };
}
