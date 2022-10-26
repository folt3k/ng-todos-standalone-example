import { Component, DoCheck, inject } from "@angular/core";

import { TodosService } from "../services/todos.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
})
export class AppComponent implements DoCheck {
  todosService = inject(TodosService);

  onButtonClick(): void {
    console.log(this.todosService.getTodos());
  }

  ngDoCheck() {
    console.log("change detection..");
  }
}
