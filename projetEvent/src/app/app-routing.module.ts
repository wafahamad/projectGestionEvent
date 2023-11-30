// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { HomeComponent } from './home/home.component';
import { LoginParticipantComponent } from './login-participant/login-participant.component';
import { SignUpParComponent } from './sign-up-par/sign-up-par.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EvenementComponent } from './evenement/evenement.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ParticipationComponent } from './participation/participation.component';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { ListParticipationsComponent } from './list-participations/list-participations.component';
import { HomeOrganisationComponent } from './home-organisation/home-organisation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardClientComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'loginP', title: 'login', component: LoginParticipantComponent },
          { path: 'signup', title: 'signup', component: SignUpParComponent },
          { path: 'home/:id', title: '', component: EvenementComponent },
          { path: 'about', title: 'about', component: AboutusComponent },
          { path: 'participation/:id', title: 'participation', component: ParticipationComponent },
        ],
      },
      {
        path: 'admin', component:DashboardComponent,
        //loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
       children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeOrganisationComponent },
        {path:'listParticipant',title:'list participants ',component:ListParticipantsComponent},
        {path:'listParticipation',title:'list participations',component:ListParticipationsComponent},
        {path:'listEvent',title:'list evenements',component:ListEventComponent}
       ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
