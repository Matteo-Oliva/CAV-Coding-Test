import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

const sharedModules = [
  CommonModule,
  MaterialModule,
  FormsModule


]

@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules]
})
export class SharedModule { }
