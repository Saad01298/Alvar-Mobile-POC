import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LobComponent } from './lob/lob.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SectionsComponent } from './sections/sections.component';
import { StatesComponent } from './states/states.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '',  pathMatch: 'full', component: LobComponent },
      { path: 'states', component: StatesComponent },
      { path: 'sections', component: SectionsComponent },
      { path: 'dashboard', component: DashboardComponent}
    ]
  }, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { 
    path: '**', 
    redirectTo: 'login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
