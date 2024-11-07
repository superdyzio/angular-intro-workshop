import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../model/todo.types';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-card.component.html',
})
export class TodoCardComponent {
  todo: InputSignal<Todo> = input.required<Todo>();
  showDetails: OutputEmitterRef<number> = output<number>();
}
