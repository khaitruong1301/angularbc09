import { Component } from '@angular/core';

@Component({
  // selector: tên component để gắn vào file html
  selector: 'app-root',
  // templateUrl: Liên kết file html lại với component
  templateUrl: './app.component.html',
  // styleUrls: Liên kết file css/scss lại với component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bc09-angular';
}
