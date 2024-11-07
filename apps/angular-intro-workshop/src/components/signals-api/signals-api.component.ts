import {
  Component,
  InputSignal,
  OutputEmitterRef,
  Signal,
  WritableSignal,
  computed,
  effect,
  input,
  output,
  signal,
  OnInit, inject, HostListener, ViewChild, ElementRef
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../model/todo.types';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-signals-api',
  standalone: true,
  providers: [ApiService],
  templateUrl: './signals-api.component.html',
  imports: [TodoCardComponent, NgForOf, NgIf, JsonPipe],
  styles: `
    .cards-container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .slideout {
      width: 300px;
      height: 100vh;
      background-color: lightblue;
      position: fixed;
      top: 0;
      right: -300px;
      transition: right 0.3s ease;
    }
  `,
})
export class SignalsApiComponent implements OnInit {
  apiService = inject(ApiService);
  todos: Todo[] = [];
  slideoutTodo: WritableSignal<Todo | null> = signal(null);

  writableSignal: WritableSignal<number> = signal(0);
  readonlySignal: Signal<number> = signal(0);

  ngOnInit(): void {
    this.writableSignal.set(1);
    this.writableSignal.update((x) => x + 1);

    this.writableSignal();

    // this.readonlySignal.set(1); // ❌
    // this.readonlySignal.update((x) => x + 1); // ❌
    this.readonlySignal();

    this.apiService.getTodos().subscribe((todos) => {
      this.todos = todos.slice(0, 3);
    });
  }

  valueA: WritableSignal<number> = signal(0);
  valueB: WritableSignal<number> = signal(0);

  sum: Signal<number> = computed(() => this.valueA() + this.valueB());

  constructor() {
    effect(() => {
      console.log(this.sum());
    });
  }

  name: InputSignal<string | undefined> = input<string>();

  requiredName: InputSignal<string> = input.required<string>();

  nameChange: OutputEmitterRef<string> = output<string>();

  openSlideout(todoId: number): void {
    const todoToShow = this.todos.find((todo) => todo.id === todoId) ?? null;
    this.slideoutTodo.set(todoToShow);
  }

  @ViewChild('slideout')
  slideout: ElementRef | undefined;

  @HostListener('mousedown', ['$event'])
  closeSlideout(e: Event): void {
    if (e.target !== this.slideout?.nativeElement) {
      this.slideoutTodo.set(null);
    }
  }
}
