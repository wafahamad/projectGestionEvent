import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participation } from '../LesClasses/participation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
private apiUrl="http://localhost:3000/participations"
  constructor(private http:HttpClient) { }

  getParticipations(): Observable<Participation[]> {
    return this.http.get<Participation[]>(this.apiUrl);
  }

  getParticipationByIdEvent(id: number): Observable<Participation[]> {
    return this.http.get<Participation[]>(`${this.apiUrl}/parEvent/${id}`);
  }

  addParticipation(p: Participation , idevent:string,token:string): Observable<Participation> {
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    })
    return this.http.post<Participation>('http://localhost:3000/participations/ajout/'+idevent, p,{headers:headers});
  }
  getParticipationByClient(id: number): Observable<Participation[]> {
    return this.http.get<Participation[]>(`http://localhost:3000/participations/participant/${id}`);
  }
  deleteParticipation(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
