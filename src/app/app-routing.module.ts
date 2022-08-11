import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { ReportsComponent } from './reports/reports.component';
import { SopMonitoringComponent } from './sop-monitoring/sop-monitoring.component';
import { SOPRepositoryComponent } from './sop-repository/sop-repository.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'reports', component: ReportsComponent
  },
  {
    path: 'monitoring', component: SopMonitoringComponent
  },
  {
    path: 'repository', component: SOPRepositoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
