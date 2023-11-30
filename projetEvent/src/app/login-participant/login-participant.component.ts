import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginParService } from '../lesService/login-par.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-participant',
  templateUrl: './login-participant.component.html',
  styleUrls: ['./login-participant.component.css']
})
export class LoginParticipantComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginParService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      e_mail: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')],
      ],
      pwd: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('e_mail');
  }

  get password() {
    return this.loginForm.get('pwd');
  }

  onSubmit() {
   
    if (this.email && this.password) { // Check for null values directly

      const userEmail = this.email.value;
      const passwordEmail = this.password.value;

      this.loginService.authenticate(userEmail, passwordEmail).subscribe(
        (response) => {
          console.log(JSON.parse(response)["token"]);
          
            
            localStorage.setItem('token', JSON.parse(response)["token"]);
            this.router.navigate(['/dashboard/home']);


        
      },
        (error) => {
          console.error('Invalid username or password', error);
          // Handle error if needed
        }
      );
    }
  }
}
