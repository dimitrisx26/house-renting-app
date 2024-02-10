import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';

export const routes: Routes = [
  { path: '', title: 'Rently - Home', component: HomeComponent },
  {
    path: 'details/:id',
    title: 'Rently - Details',
    component: DetailsComponent,
  },
  {
    path: 'edit',
    title: 'Rently - Edit Listing',
    component: EditListingComponent,
  },
  {
    path: 'edit/:id',
    title: 'Rently - Edit Listing',
    component: EditListingComponent,
  },
  {
    path: 'add',
    title: 'Rently - Add Listing',
    component: AddListingComponent,
  },
  { path: '**', redirectTo: '' },
];
