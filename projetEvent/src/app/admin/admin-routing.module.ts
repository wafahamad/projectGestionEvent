// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from '../admin-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ParticipationsComponent } from './participations/participations.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminGuardGuard],
        children: [
          { path: 'participant', component: ParticipantsComponent },
          { path: 'evenements', component: EvenementsComponent },
          { path: 'participations', component: ParticipationsComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
