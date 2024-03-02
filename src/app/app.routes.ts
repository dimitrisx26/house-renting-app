import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', title: 'Rently - Home', component: HomeComponent },
  {
    path: 'details/:id',
    title: 'Rently - Details',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
  },
  {
    path: 'edit',
    title: 'Rently - Edit Listing',
    loadComponent: () =>
      import('./edit-listing/edit-listing.component').then(
        (m) => m.EditListingComponent,
      ),
  },
  {
    path: 'edit/:id',
    title: 'Rently - Edit Listing',
    loadComponent: () =>
      import('./edit-listing/edit-listing.component').then(
        (m) => m.EditListingComponent,
      ),
  },
  {
    path: 'add',
    title: 'Rently - Add Listing',
    loadComponent: () =>
      import('./add-listing/add-listing.component').then(
        (m) => m.AddListingComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
