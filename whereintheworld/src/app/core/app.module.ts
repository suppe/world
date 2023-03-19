import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { CountryModule } from '../country-list/country.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, HeaderModule, CountryModule],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
