import { Component, OnInit,ViewChildren,QueryList } from '@angular/core';
import { ProductComponent } from './Product.component';

@Component({
    selector: 'app-product-list',
    template: `<div>
        <h3>User list</h3>
        <div class="row">
            <div class="col-4" *ngFor="let user of arrUser">
                <app-product [user]="user" (eventViewProfile)="viewProfileParent($event)" ></app-product>
                <!-- <app-product></app-product> -->
                <!-- <div class="card">
                    <img [src]="user.avatar" alt="..." />
                    <div class="card-body">
                        <p>Name: {{user.name}}</p>
                        <p>User: {{user.email}}</p>
                        <button class="btn btn-outline-success" (click)="viewProfile(user)">view profile</button>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="mt-2" >
            <div class="form-group">
                <p>Age</p>
                <input class="form-control" #age /> <br />
                <button class="btn btn-outline-danger" (click)="addAge(age.value)">Add Age</button>
            </div>
        </div>

        <h3>Profile</h3>
        <div class="mt-2 row">   
            <div class="avatar col-4">
                <img [src]="userProfile.avatar" alt="..." />
            </div>
            <div class="col-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>{{userProfile.id}}</th>
                        </tr>
                        <tr>
                            <th>name</th>
                            <th>{{userProfile.name}}</th>
                        </tr>
                        <tr>
                            <th>email</th>
                            <th>{{userProfile.email}}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

    </div>`
})

export class ProductListComponent implements OnInit {

    @ViewChildren(ProductComponent) dsTagProduct!:QueryList<ProductComponent>

    addAge(age:string) {
        //Duyệt danh sách các thẻ <app-product></app-product>
        this.dsTagProduct.forEach((tagProduct:ProductComponent,index:number)=>{
            if(tagProduct.user.name !== 'Man') {
                tagProduct.user = {...tagProduct.user,age:age};
            }else {
                tagProduct.user = {...tagProduct.user,age:'50'}
            }
        })
        // console.log(this.dsTagProduct);
    }




    userProfile:User = {id:'1',name:'Nam',email:'nam@gmail.com',avatar:'https://i.pravatar.cc/250?u=nam'};


    arrUser:User[] = [
        {id:'1',name:'Nam',email:'nam@gmail.com',avatar:'https://i.pravatar.cc/250?u=nam'},
        {id:'2',name:'Man',email:'mandeptrai@gmail.com',avatar:'https://i.pravatar.cc/250?u=man'},
        {id:'3',name:'Sĩ',email:'si@gmail.com',avatar:'https://i.pravatar.cc/250?u=si'},
    ]
    constructor() { }
    viewProfile(user:User) {
        this.userProfile = user;
    }

    viewProfileParent(userClick:User) { //userClick là biến $event được emit từ component Product thông @Output() eventViewProfile
        this.userProfile = userClick;
    }
    ngOnInit() { }
}


interface User {
    id:string,
    name:string,
    avatar:string,
    email:string
}