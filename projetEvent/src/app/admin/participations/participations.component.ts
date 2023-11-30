import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Participation } from 'src/app/LesClasses/participation';
import { ParticipationService } from "src/app/lesService/participation.service";

@Component({
  selector: 'app-participations',
  templateUrl: './participations.component.html',
  styleUrls: ['./participations.component.css']
})
export class ParticipationsComponent {

  participations!: Observable<Participation[]>;

  constructor (private parService:ParticipationService,private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.participations = this.parService.getParticipations();
  }

 // deleteParticipation(id:number) {

   // this.parService.deleteParticipation(id)
  //    .subscribe(
   //     data => {
   //       console.log(data);
    //      this.reloadData();
    //    },
    //    error => console.log(error));
  //}

}
