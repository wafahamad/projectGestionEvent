import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from '../LesClasses/participant';
import { Event } from '../LesClasses/event';
import { Participation } from '../LesClasses/participation';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipationService } from '../lesService/participation.service';
import { EvenementService } from '../lesService/evenement.service';
import { LoginParService } from '../lesService/login-par.service';
import { ParticipantService } from '../lesService/participant.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css'],
})
export class ParticipationComponent implements OnInit {
  idE!: string;
  data: any;
  ParForm!: FormGroup;
  partById!: Participant;
  eventById!: Event;
  idAuth!: any;
  participations: Participation[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ParticipationService,
    private router: Router,
    private fb: FormBuilder,
    private ev: EvenementService,
    private l: LoginParService,
    private par: ParticipantService
  ) {}

  ngOnInit(): void {
    this.idE = this.activatedRoute.snapshot.params['id'];
    console.log(this.idE);
    this.getEvent();

    this.idAuth = localStorage.getItem('token');
    this.par
      .getParticipantById(this.idAuth)
      .subscribe((data: Participant) => {
        this.partById = data;
        console.log(this.partById);
      });

    this.ev.getEventById(this.idE).subscribe((data: any) => {
      this.eventById = data;
      console.log(this.eventById);
    });

    this.InitForm();
  }

  InitForm() {
    this.ParForm = this.fb.group({
      datePar: [new Date()],
      nbPrs: [0],
      
    });
  }

  getEvent() {
    this.ev.getEventById(this.idE).subscribe((res) => {
      this.data = res;
    });
  }

  goback() {
    this.router.navigate(['/dashboard/home', this.idE]);
  }

  getParticiper() {
    console.log(this.idAuth);
    this.ps.addParticipation(this.ParForm.value,this.idE,this.idAuth).subscribe(
      (data) => {
        this.participations.push(data);
        alert('Participation faite avec succès !');
        console.log(this.ParForm.value);
      },
      (error) => {
        console.error(error);
        // Handle error, display an alert, etc.
      }
    );
  }

  onVider() {
    this.ParForm.reset();
  }
}
