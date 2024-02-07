import { Injectable } from '@angular/core';
import { Listing } from './listing';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected listingsList: Listing[] = [
    {
      id: 1,
      name: 'Cozy 1 BR Apartment',
      city: 'Seattle',
      photo:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 400,
      wifi: true,
      laundry: false,
    },
    {
      id: 2,
      name: 'Modern 2 BR Apartment',
      city: 'San Francisco',
      photo:
        'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 2000,
      wifi: true,
      laundry: true,
    },
    {
      id: 3,
      name: 'Rustic 1 BR House',
      city: 'Portland',
      photo:
        'https://images.pexels.com/photos/6032283/pexels-photo-6032283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1500,
      wifi: false,
      laundry: true,
    },
    {
      id: 4,
      name: 'Downtown Condo ',
      city: 'Glyfada',
      photo:
        'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 200,
      wifi: true,
      laundry: true,
    },
    {
      id: 5,
      name: 'Spacious 3 BR House',
      city: 'Portland',
      photo:
        'https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 2500,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Modern 1 BR Apartment',
      city: 'San Francisco',
      photo:
        'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 2000,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Cozy 2 BR House',
      city: 'Seattle',
      photo:
        'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 200,
      wifi: true,
      laundry: true,
    },
  ];

  constructor() {}

  getListings(): Listing[] {
    return this.listingsList;
  }

  getListingById(id: number): Listing | undefined {
    return this.listingsList.find((listing) => listing.id === id);
  }
}
