import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterPageModule } from './components/footer-page/footer-page.module';
import { HeaderPageModule } from './components/header-page/header-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterPageModule,
    HeaderPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
