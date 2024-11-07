import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../model/todo.types';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { BehaviorSubject, debounceTime, fromEvent, map, startWith } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  providers: [ApiService],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit, AfterViewInit {
  apiService = inject(ApiService);
  todos: Todo[] = [];
  searchText = '';
  visibleTodosSubject$ = new BehaviorSubject(this.todos);
  visibleTodos$ = this.visibleTodosSubject$.asObservable();

  @ViewChild('search')
  searchInput: ElementRef | undefined;

  ngOnInit(): void {
    this.apiService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.visibleTodosSubject$.next(todos);
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput?.nativeElement, 'input').pipe(
      debounceTime(500),
      map((event: any) => (event.target as HTMLInputElement).value.trim()),
      map((searchText) =>
        this.todos.filter((todo) => todo.title.includes(searchText))
      ),
      startWith(this.todos)
    )
      .subscribe(visibleTodos => this.visibleTodosSubject$.next(visibleTodos));
  }
}
