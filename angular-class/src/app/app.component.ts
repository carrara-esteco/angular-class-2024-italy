import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'quello che voglio';
}

