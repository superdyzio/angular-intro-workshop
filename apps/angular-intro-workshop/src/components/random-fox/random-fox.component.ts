import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';

interface FoxImage {
  image: string;
  link: string;
}

@Component({
  selector: 'app-random-fox',
  standalone: true,
  imports: [],
  template: ` @if(foxImage()) {<img
      [style.maxWidth]="'100%'"
      [style.maxHeight]="'100%'"
      [src]="foxImage()"
      alt="Random fox image"
    />} @else { loading fox image... }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomFoxComponent implements OnInit {
  private readonly apiUrl = 'https://randomfox.ca/floof/';
  private readonly httpClient = inject(HttpClient);
  foxImage = signal<string>('');

  ngOnInit(): void {
    this.httpClient.get<FoxImage>(this.apiUrl).subscribe((response) => {
      this.foxImage.set(response.image);
    });
  }
}
