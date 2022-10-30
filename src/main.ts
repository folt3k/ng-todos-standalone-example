import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { importProvidersFrom } from "@angular/core";
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { devTools } from "@ngneat/elf-devtools";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";

devTools();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)],
}).catch((err) => {
  console.log(err);
});
