import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListingsComponent } from '../listings/listings.component';
import { HousingService } from '../housing.service';
import { Listing } from '../listing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListingsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  listings: Listing[] = [];
  filteredListings: Listing[] = [];
  filterText!: string;

  constructor(public housing: HousingService) {
    this.listings = this.housing.getListings();
    this.filteredListings = this.listings;
  }

  filterResults() {
    if (!this.filterText) {
      this.filteredListings = this.listings;
    }

    this.filteredListings = this.listings.filter((listing) => {
      return listing.city.toLowerCase().includes(this.filterText.toLowerCase());
    });
  }

  ngOnInit() {}
}
