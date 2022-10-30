import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [CommonModule, MatButtonModule],
})
export class SharedModule {}
