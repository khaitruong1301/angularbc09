import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'app-product',
    template: `
        <div class="card">
                    <img [src]="user.avatar" alt="..." />
                    <div class="card-body">
                        <p>Name: {{user.name}}</p>
                        <p>Email: {{user.email}}</p>
                        <p *ngIf="user.age">Age: {{user.age}}</p>
                        <button class="btn btn-outline-success" (click)="viewProfile(user)">view profile</button>
                    </div>
        </div>
    `
})

export class ProductComponent implements OnInit {

    //Thuộc tính output dùng để đưa dữ liệu tự component con(này) ra bên ngoài thông qua event
    @Output() eventViewProfile = new EventEmitter()

    @Input() user!:User 

    constructor() { }

    ngOnInit() { }
    viewProfile(user:User) {
        //.emit([gia_tri_dua_ra_component_cha])
        this.eventViewProfile.emit(user);
    }
}

interface User {
    id:string,
    name:string,
    avatar:string,
    email:string,
    age?:string
}