import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: 'add.component.html'
})
export class AddComponent {

  seriesOptions = ['commonwealth', 'belgian', 'bohemian', 'pacific'];

  beerForm: FormGroup = new FormGroup({
    name: new FormControl('La mia birretta', Validators.required),
    style: new FormControl('Il mio stile', Validators.required),
    quantity: new FormControl(12),
    abv: new FormControl(5),
    series: new FormControl('', Validators.required)
  });

  addBeer() {
    console.log(this.beerForm.value);
  }
}
