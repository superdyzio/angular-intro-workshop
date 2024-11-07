import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../model/todo.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ApiService],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  apiService = inject(ApiService);
  todos: Todo[] = [];
  visibleTodos: Todo[] = [];
  searchText = '';

  ngOnInit(): void {
    this.apiService.getTodos().subscribe(todos => {
      this.todos = todos
      this.visibleTodos = todos;
    });
  }

  handleInput(e: Event) {
    this.searchText = (e.target as HTMLInputElement).value;
    this.visibleTodos = this.searchText.length > 0 ? this.todos.filter(todo => todo.title.includes(this.searchText)) : this.todos;
  }
}
