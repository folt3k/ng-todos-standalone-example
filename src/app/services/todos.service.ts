import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  cachedTodos$!: Observable<string[]>;

  http = inject(HttpClient);

  getTodos(): Observable<string[]> {
    if (!this.cachedTodos$) {
      this.cachedTodos$ = this.http
        .get<Array<{ title: string }>>("https://jsonplaceholder.typicode.com/todos")
        .pipe(
          map((data) => data.map((item) => item.title)),
          shareReplay(1)
        );
    }

    return this.cachedTodos$;
  }
}
