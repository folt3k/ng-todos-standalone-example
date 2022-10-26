import { Component, inject } from "@angular/core";

import { TodosService } from "./services/todos.service";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
})
export class AppComponent {
  todosService = inject(TodosService);

  onButtonClick(): void {
    // console.log(this.todosService.getTodos());
  }
}
