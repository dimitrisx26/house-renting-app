import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
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
  selector: 'app-edit-listing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-listing.component.html',
  styleUrl: './edit-listing.component.css',
})
export class EditListingComponent {
  listings: Listing[] | undefined;
  editListing: Listing | undefined;

  editForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    wifi: new FormControl(''),
    laundry: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housing: HousingService
  ) {
    this.listings = this.housing.getListings();
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      this.editListing = this.housing.getListingById(id);
      this.editForm.patchValue({
        id: this.editListing?.id,
        name: this.editListing?.name,
        city: this.editListing?.city,
        photo: this.editListing?.photo,
        price: this.editListing?.price,
        wifi: this.editListing?.wifi,
        laundry: this.editListing?.laundry,
      });
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.editForm.valid) {
      const id = Number(this.route.snapshot.params['id']);
      const name = this.editForm.value.name;
      const city = this.editForm.value.city;
      const photo = this.editForm.value.photo;
      const price = this.editForm.value.price;
      const wifi = this.editForm.value.wifi;
      const laundry = this.editForm.value.laundry;

      this.housing.updateListing(id, name, city, photo, price, wifi, laundry);
      this.router.navigate(['/edit']);
    }
  }
}
