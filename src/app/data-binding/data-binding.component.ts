import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  email: string;
}

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  username: string = 'Dan Nguyen';
  student: Student = {
    name: 'Dan Nguyen',
    email: 'dannd@gmail.com',
  };
  isDisabled: boolean = true;

  email: string = '';
  address: string = '';

  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    alert('Bạn vừa click vào button alert');
  }

  changeEmail(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      this.email = event.target.value;
    }

    // this.email = (event.target as HTMLInputElement).value;

    // Không nên xài
    // this.email = (event.target as any).value
  }
}
