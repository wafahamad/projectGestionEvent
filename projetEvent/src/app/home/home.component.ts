import { Component } from '@angular/core';
import { EvenementService } from '../lesService/evenement.service';
import { Event } from '../LesClasses/event';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  events:Event[]=[];
  constructor (private evn : EvenementService,private route:Router){};

  ngOnInit(): void {
    console.log(localStorage.getItem('user-id'))   
     console.log(localStorage.getItem('user-nom'))
    console.log(localStorage.getItem('user-prenom'))
    console.log(localStorage.getItem('user-email'))
    this.evn.getEvents().subscribe((data:any) =>(this.events=data));
  }
  getMoreInfo(e:Event,id:string){
    if(e.disponible==false){
       
    alert("this Event is not available!");}
    else{
      this.route.navigate(['/dashboard/home',id]);
    }
    

  }
}
