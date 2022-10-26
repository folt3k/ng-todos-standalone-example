import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-todo-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() data!: string;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    console.log("change detection..");
  }
}
