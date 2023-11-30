// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ParticipationsComponent } from './participations/participations.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,

    ParticipantsComponent,
    EvenementsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
