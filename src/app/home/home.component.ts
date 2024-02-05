import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListingsComponent } from '../listings/listings.component';
import { HousingService } from '../housing.service';
import { Listing } from '../listing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  listings: Listing[] = [];
  filteredListings: Listing[] = [];

  constructor(public housing: HousingService) {
    this.listings = this.housing.getListings();
    this.filteredListings = this.listings;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredListings = this.listings;
    }

    this.filteredListings = this.listings.filter((listing) => {
      return listing.city.toLowerCase().includes(text.toLowerCase());
    });
  }

  ngOnInit() {}
}
