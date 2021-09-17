import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isVisible: boolean = true;
  isLoggedIn: boolean = true;

  color: string = '';

  students: any = [
    { id: "001310", fullName: 'Văn Tèo', email: 'teo@gmail.com', gender: 'male' },
    { id: "001425", fullName: 'Văn Tí', email: 'ti@gmail.com', gender: 'male' },
    { id: "001327", fullName: 'Thị Nụ', email: 'nu@gmail.com', gender: 'female' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
