import { Component } from '@angular/core';
import { Participant } from '../LesClasses/participant';
import { ParticipantService } from '../lesService/participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.css']
})
export class ListParticipantsComponent {
  participants!:Participant[];
  constructor (private par : ParticipantService,private router:Router){};

  ngOnInit(): void {
    this.par.getParticipants().subscribe((data) =>(this.participants=data));
  }
  deleteParticipant(id: number): void {
    this.par.deleteParticipant(id).subscribe(
      (response) => {
        console.log(response); 
        this.refreshPage();
      },
      (error) => {
        console.error(error); 
      }
    );
  }
  private refreshPage(): void {
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/listParticipant']); 
    });
  }
}
