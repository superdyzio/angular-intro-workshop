import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from '../components/todos/todos.component';

@Component({
  standalone: true,
  imports: [RouterModule, TodosComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-intro-workshop';
}
