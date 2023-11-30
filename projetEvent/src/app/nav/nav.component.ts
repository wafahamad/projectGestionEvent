import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginParService } from '../lesService/login-par.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit{
  constructor(public ls:LoginParService,private route:Router) { }
  ngOnInit(): void {
    
  }
  exit() {
    confirm("Are you sure?");
    
  
    // Supprimer la clé isConnected du localStorage
    localStorage.removeItem('isConnected');
    localStorage.removeItem('user-id');
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-nom');
    localStorage.removeItem('user-prenom');


   
    // Rediriger vers la page de connexion
    this.route.navigate(['/dashboard/loginP']);
  }
  

  gologin(){
    this.route.navigate(['/dashboard/loginP'])
  }

}
