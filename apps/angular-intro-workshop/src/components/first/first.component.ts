import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
})
export class FirstComponent {
  textVisible = true;
  people = [
    { name: 'Dawid', age: 31 },
    { name: 'Wojtek', age: 28 },
    { name: 'Ania', age: 30 },
  ];

  addPerson() {
    this.people.push({ name: 'Krzysio', age: 32 });
  }

  removePerson(i: number) {
    this.people.splice(i, 1);
  }
}
