import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  constructor() {}

  getTodos(): string[] {
    return ["a", "b"];
  }
}