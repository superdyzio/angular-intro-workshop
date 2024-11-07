import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../model/todo.types';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  providers: [ApiService],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  apiService = inject(ApiService);
  todos: Todo[] = [];

  ngOnInit(): void {
    this.apiService.getTodos().subscribe(todos => this.todos = todos);
  }
}
