import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
  standalone: true
})
export class ChildComponent {

  @Input()
  public greeting: string = '';

}
