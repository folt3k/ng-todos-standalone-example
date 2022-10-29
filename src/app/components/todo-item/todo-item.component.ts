import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodoItem } from "../../types";

@Component({
  selector: "app-todo-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() data!: TodoItem;

  constructor() {}

  ngOnInit(): void {}
}
