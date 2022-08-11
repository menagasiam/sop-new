import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SOPRepositoryComponent } from './sop-repository/sop-repository.component';
import { SopMonitoringComponent } from './sop-monitoring/sop-monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardComponent,
    SOPRepositoryComponent,
    SopMonitoringComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
