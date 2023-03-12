import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CountryListViewComponent } from './country-list/components/country-list-view/country-list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryListItemComponent } from './country-list/components/country-list-item/country-list-item.component';
import { CountryDetailViewComponent } from './country-list/components/country-detail-view/country-detail-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FifaCodeToNamePipe } from './country-list/pipes/fifa-code-to-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryListViewComponent,
    CountryListItemComponent,
    CountryDetailViewComponent,
    FifaCodeToNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
