import { Injectable } from "@angular/core";
import {
  HttpContext,
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable, of, tap } from "rxjs";

const HTTP_CACHE_TOKEN = new HttpContextToken(() => true);

export function withCache(): HttpContext {
  return new HttpContext().set(HTTP_CACHE_TOKEN, true);
}

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpEvent<unknown>>();

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const context = req.context.get(HTTP_CACHE_TOKEN);

    if (context && req.method === "GET") {
      const cacheEvent = this.cache.get(req.urlWithParams);

      if (cacheEvent) {
        return of(cacheEvent);
      }

      return next.handle(req).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.cache.set(req.urlWithParams, event);
          }
        })
      );
    }

    return next.handle(req);
  }
}
