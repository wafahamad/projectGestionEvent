import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginParticipantComponent } from './login-participant/login-participant.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { NavComponent } from './nav/nav.component';
import { SignUpParComponent } from './sign-up-par/sign-up-par.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ListEventComponent } from './list-event/list-event.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ParticipationComponent } from './participation/participation.component';
import { AdminModule } from './admin/admin.module';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { ListParticipationsComponent } from './list-participations/list-participations.component';
import { HomeOrganisationComponent } from './home-organisation/home-organisation.component'; // Import AdminModule


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginParticipantComponent,
    DashboardClientComponent,
    NavComponent,
    SignUpParComponent,
    EvenementComponent,
    ListEventComponent,
    AboutusComponent,
    ParticipationComponent,
    ListParticipantsComponent,
    ListParticipationsComponent,
    HomeOrganisationComponent,
   
  ],
  imports: [
    HttpClientModule, 
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
