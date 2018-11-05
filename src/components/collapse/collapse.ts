import { Component } from '@angular/core';

/**
 * Generated class for the CollapseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'collapse',
  templateUrl: 'collapse.html'
})
export class CollapseComponent {

  showDetails: boolean = true;

  constructor() {
  }

  toggleDetails() {
    if (this.showDetails) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
  }

}
