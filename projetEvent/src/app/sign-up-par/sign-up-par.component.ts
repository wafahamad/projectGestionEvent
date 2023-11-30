import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginParService } from '../lesService/login-par.service';
import { Participant } from '../LesClasses/participant';
import { ParticipantService } from '../lesService/participant.service';

@Component({
  selector: 'app-sign-up-par',
  templateUrl: './sign-up-par.component.html',
  styleUrls: ['./sign-up-par.component.css']
})
export class SignUpParComponent implements OnInit {
  loginForm!: FormGroup;
  AllParticipant!: Participant[];

  constructor(private fb: FormBuilder, private par: ParticipantService) {}

  ngOnInit(): void {
    this.par.getParticipants().subscribe(
      (data) => (this.AllParticipant = data)
    );
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      idP: new FormControl(),
      e_mail: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      cin: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
    });
  }
public get idP(){
  return this.loginForm.get('idP');
}
  public get nom() {
    return this.loginForm.get('nom');
  }
  public get prenom() {
    return this.loginForm.get('prenom');
  }
  public get age() {
    return this.loginForm.get('age');
  }
  public get pwd() {
    return this.loginForm.get('pwd');
  }
  public get email() {
    return this.loginForm.get('e_mail');
  }
  public get cin() {
    return this.loginForm.get('cin');
  }

  CreateParticipant() {
    this.par
      .registerParticipant(
        
        this.email?.value,
        this.pwd?.value,
        this.nom?.value,
        this.prenom?.value,
        this.age?.value,
        this.cin?.value,
        this.idP?.value
      )
      .subscribe((participant) => {
        this.AllParticipant.push(participant);
        alert('Welcome to Event.com! You are our client now');
      });
  }
}
