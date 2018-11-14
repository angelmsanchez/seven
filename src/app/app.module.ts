import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { NgExampleLibModule } from 'ng-example-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    NgExampleLibModule,
  ],
  providers: [],
  exports: [NgExampleLibModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
