import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: '', title: 'Rently - Home', component: HomeComponent },
    { path: 'details/:id', title: 'Rently - Details', component: DetailsComponent },
    { path: '**', redirectTo: '' },
];
