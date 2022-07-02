import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { MainComponent } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    BrowserModule,
    EcommerceRoutingModule,
    ReactiveFormsModule,
  ],
  bootstrap: [MainComponent],
})
export class EcommerceModule {}
