import { Component } from '@angular/core';
import { Participation } from '../LesClasses/participation';
import { ParticipationService } from '../lesService/participation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-participations',
  templateUrl: './list-participations.component.html',
  styleUrls: ['./list-participations.component.css']
})
export class ListParticipationsComponent {
  participations!:Participation[];
  constructor (private parti : ParticipationService,private router: Router){};

  ngOnInit(): void {
    this.parti.getParticipations().subscribe((data) =>(this.participations=data));
  }
  deleteParticipation(id: string): void {
    this.parti.deleteParticipation(id).subscribe(
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
      this.router.navigate(['/admin/listParticipation']); 
    });
  }
}
