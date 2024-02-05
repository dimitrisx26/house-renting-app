import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Listing } from '../listing';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.css'
})
export class ListingsComponent {
  @Input() listing!: Listing;
}
