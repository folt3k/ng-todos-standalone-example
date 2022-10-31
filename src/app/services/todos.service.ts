import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { withCache } from "../_shared/cache.interceptor";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  http = inject(HttpClient);

  getTodos(): Observable<string[]> {
    return this.http
      .get<Array<{ title: string }>>("https://jsonplaceholder.typicode.com/todos", {
        context: withCache(),
      })
      .pipe(map((data) => data.map((item) => item.title)));
  }
}
