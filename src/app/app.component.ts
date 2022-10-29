import { Component, inject } from "@angular/core";

import { TodosService } from "./services/todos.service";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { addTodo, todos$ } from "./store/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
})
export class AppComponent {
  todosService = inject(TodosService);
  todos$ = todos$;

  onButtonClick(): void {
    addTodo({ content: "nowy" });
  }
}
