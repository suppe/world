import { NgModule } from '@angular/core';
import { FifaCodeToNamePipe } from '../country-list/pipes/fifa-code-to-name.pipe';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../core/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FifaCodeToNamePipe],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    FifaCodeToNamePipe,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
})
export class SharedModule {}
