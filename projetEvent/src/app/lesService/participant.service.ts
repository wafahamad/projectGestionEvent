import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../LesClasses/participant';
const URL = 'http://localhost:3000';
  const api = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  
  constructor(private http:HttpClient) { }
 // Get all participants
 getParticipants(): Observable<Participant[]> {
  return this.http.get<Participant[]>(`${URL}/participants`);
}

// Get participant by ID
getParticipantById(id: number): Observable<Participant> {
  return this.http.get<Participant>(`${URL}/participants/${id}`);
}

// Update participant by ID
updateParticipant(id: number, participant: Participant): Observable<Participant> {
  return this.http.put<Participant>(`${URL}/participants/${id}`, participant);
}
registerParticipant(email: string, password: string, nom: string, prenom: string, age: number, cin: string,idP: number): Observable<Participant> {
  const body = { e_mail: email, pwd: password, nom, prenom, age, cin, idP };
  return this.http.post<Participant>(`${api}/register`, body);
}
// Delete participant by ID
deleteParticipant(id: number): Observable<Participant> {
  return this.http.delete<Participant>(`${URL}/participants/${id}`);
}
}
