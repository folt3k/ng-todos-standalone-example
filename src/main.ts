import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { importProvidersFrom } from "@angular/core";
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { devTools } from "@ngneat/elf-devtools";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CacheInterceptor } from "./app/_shared/cache.interceptor";

devTools();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
}).catch((err) => {
  console.log(err);
});
