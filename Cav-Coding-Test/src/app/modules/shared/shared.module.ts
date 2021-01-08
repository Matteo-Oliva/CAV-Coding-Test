import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const sharedModules = [
  CommonModule,
  FormsModule,
];

@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules]
})
export class SharedModule { }
