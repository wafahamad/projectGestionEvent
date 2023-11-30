import { Component } from '@angular/core';
import { Participant } from 'src/app/LesClasses/participant';
import { Observable } from "rxjs";
import { ParticipantService } from 'src/app/lesService/participant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent {

  participants!: Observable<Participant[]>;

  constructor (private parService:ParticipantService,private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.participants = this.parService.getParticipants();
  }

  deleteParticipant(id:number) {

    this.parService.deleteParticipant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
