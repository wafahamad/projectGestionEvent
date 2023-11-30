import { Component } from '@angular/core';
import { EvenementService } from '../lesService/evenement.service';
import { Event } from '../LesClasses/event';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  events!:Event[];
  evnForm !: FormGroup;
  hideForm = true
  constructor (private evn : EvenementService, private router:Router,private fb:FormBuilder){};

  ngOnInit(): void {
    this.evnForm = this.fb.nonNullable.group({
      idE:['',Validators.required],
      nom : ['',Validators.required],
      date : ['',Validators.required],
      nbrPart : ['',Validators.required],
      nbrPlace : ['',Validators.required],
      disponible:['',Validators.required],
      description:['',Validators.required],
      img:['',Validators.required]
    });
    this.evn.getEvents().subscribe((data) =>(this.events=data));
  }

  public get idE ()
  {
    return this.evnForm.get('idE') ;
   }
  public get nom(){
    return this.evnForm.get('nom');
  }
  public get date(){
    return this.evnForm.get('date');
  }
  public get nbrPart(){
    return this.evnForm.get('nbrPart');
  }
  public get nbrPlace(){
    return this.evnForm.get('nbrPlace');
  }
  public get description(){
    return this.evnForm.get('description');
  }
  public get disponible(){
    return this.evnForm.get('disponible');
  }
  public get image (){
    return this.evnForm.get('img');
  }

  AddEvent(){
    this.evn.addEvent(this.evnForm.value).subscribe(
      data => this.events.push(data)
    );
    this.refreshPage();
    alert("new event has been added!")
  }

  ChangeEvent(form : Event){
    this.hideForm = false;
    this.evnForm.get('idE')?.setValue(form.idE);
    this.evnForm.get('nom')?.setValue(form.nom);
    this.evnForm.get('date')?.setValue(form.date);
    this.evnForm.get('nbrPart')?.setValue(form.nbrPart);
    this.evnForm.get('nbrPlace')?.setValue(form.nbrPlace);
    this.evnForm.get('img')?.setValue(form.img);
    this.evnForm.get('disponible')?.setValue(form.disponible);
    this.evnForm.get('description')?.setValue(form.description);

  }

  UpdateEvent(e:Event){
    this.evn.updateEvent(e.idE,this.evnForm.value).subscribe();
    this.refreshPage();
  }

  changeForm(){
    if(this.hideForm==true){
      this.hideForm = false
    }
    else{
      this.hideForm = true
    }
  }


  deleteEvent(id: number): void {
    this.evn.deleteEvent(id).subscribe(
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
      this.router.navigate(['/admin/listEvent']);
    });
  }

}