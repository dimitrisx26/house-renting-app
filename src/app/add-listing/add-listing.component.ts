import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
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
  listings: Listing[] | undefined;

  addForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    wifi: new FormControl(''),
    laundry: new FormControl(''),
  });

  constructor(
    private housing: HousingService,
    private router: Router,
  ) {}

  ngOnInit() {}

  updateImagePreview() {
    let photoControl = this.addForm.get('photo');
    if (photoControl) {
      photoControl.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.addForm.valid) {
      const name = this.addForm.value.name;
      const city = this.addForm.value.city;
      const photo = this.addForm.value.photo;
      const price = this.addForm.value.price;
      const wifi = this.addForm.value.wifi;
      const laundry = this.addForm.value.laundry;

      this.housing.addListing(name, city, photo, price, wifi, laundry);
      this.router.navigate(['/edit']);
    }
  }
}
