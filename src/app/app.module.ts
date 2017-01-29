import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { EditorModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { AGRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { SheetsModule } from './sheets/sheets.module';
import { RulesModule } from './rules/rules.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({
    noTokenScheme: true
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AGRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    SharedModule,
    EditorModule,
    AdminModule,
    AuthModule,
    SheetsModule,
    RulesModule
  ],
  providers: [
    Title,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
