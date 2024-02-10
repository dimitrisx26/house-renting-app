import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HousingService } from '../housing.service';
import { Listing } from '../listing';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './add-listing.component.html',
  styleUrl: './add-listing.component.css',
})
export class AddListingComponent {
  listing: Listing | undefined;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private housing: HousingService) {
    const id = Number(this.route.snapshot.params['id']);
    this.listing = this.housing.getListingById(id);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted');
      console.log('Name: ' + this.contactForm.get('name')?.value);
      console.log('Email: ' + this.contactForm.get('email')?.value);
      console.log('Message: ' + this.contactForm.get('message')?.value);
    }
  }
}
