import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currYear: number = new Date().getFullYear();
  constructor() {}
}
