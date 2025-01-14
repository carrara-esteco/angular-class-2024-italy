import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    series: new FormControl('', Validators.required),
    date: new FormControl(new Date().toISOString().split('T')[0])
  });

  constructor(private router: Router) {
  }

  public addBeer(): void {
    this.router.navigate(['home']);
  }
}
