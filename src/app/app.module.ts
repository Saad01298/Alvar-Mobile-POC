import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LobComponent } from './lob/lob.component';
import { StatesComponent } from './states/states.component';
import { SectionsComponent } from './sections/sections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';
import { DataService } from './dashboard/data.component.service';
import { DashboardService } from './dashboard/dashboard.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LobComponent,
    StatesComponent,
    SectionsComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [DataService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
