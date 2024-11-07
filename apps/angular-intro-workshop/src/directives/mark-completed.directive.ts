import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarkCompleted]',
  standalone: true,
})
export class MarkCompletedDirective {
  @Input({ required: true, alias: 'appMarkCompleted' }) completed = false;

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.completed ? 'lightgreen' : 'transparent';
  }
}
