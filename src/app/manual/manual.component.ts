import { Component } from '@angular/core';

// @Component({
//   selector: 'app-manual',
//   templateUrl: './manual.component.html',
//   styleUrls: ['./manual.component.css'],
// })
@Component({
  selector: 'app-manual',
  template: `<div class="one">one in manual</div>
    <div class="two">two in manual</div>`,
  styles: [
    `
      .one {
        color: red;
      }
      .two {
        color: blue;
      }
    `,
  ],
})
export class ManualComponent {}
