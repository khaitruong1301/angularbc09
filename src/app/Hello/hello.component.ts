import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  // Có thể code trực tiếp html thông qua meta-data template
  template: ` <h1 class="title">Hello Component</h1> `,
  styles: [
    `
      .title {
        color: yellow;
      }
    `,
  ],
})
export class HelloComponent {}
