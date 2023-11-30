import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/lesService/evenement.service';
@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent {

  events: any ;

  constructor(private router: Router, private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.evenementService.getEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error: any) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  addNewEvent(): void {
    // Redirect to a new event form or page to add an event
    this.router.navigate(['/events/add']); // Replace '/events/add' with your route for adding events
  }

  updateEvent(eventId: number): void {
    // Redirect to an edit event form or page
    this.router.navigate(['/events/edit', eventId]); // Replace '/events/edit' with your route for editing events
  }

  deleteEvent(eventId: number): void {
    // Implement logic to delete an event
    const confirmation = confirm('Are you sure you want to delete this event?');
    if (confirmation) {
      this.evenementService.deleteEvent(eventId).subscribe(
        () => {
          // Reload events after deletion
          this.loadEvents();
        },
        (error) => {
          console.error('Error deleting event:', error);
        }
      );
    }
  }
}
