import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../LesClasses/event';

const url="http://localhost:3000"


@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) { }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${url}/evenements`);
  }

  // Get event by ID
  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`${url}/evenements/${id}`);
  }

  // Add a new event
  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${url}/evenements/ajout`, event);
  }

  // Update an event by ID
  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${url}/evenements/${id}`, event);
  }

  // Delete an event by ID
  deleteEvent(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/evenements/${id}`);
  }

}

