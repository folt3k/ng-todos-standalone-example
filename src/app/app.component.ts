import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodosService } from "./services/todos.service";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { addTodo, todos$ } from "./store/store";
import { SharedModule } from "./_shared/shared.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [TodoItemComponent, SharedModule],
})
export class AppComponent {
  todosService = inject(TodosService);
  todos$ = todos$;

  onButtonClick(): void {
    addTodo({ content: "nowy" });
  }
}
