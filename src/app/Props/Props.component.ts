import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './ProductList.component';

@Component({
    selector: 'app-props-demo',
    template: `
        <div class="container" style="margin-bottom: 500px;">
            <h3>Demo input - output</h3>
            <app-product-list #tagProductList></app-product-list>

            <div class="mt-2">
                <h3>Add user </h3>
                <div class="form-group">
                    <p>id</p>
                    <input class="form-control" [(ngModel)]="userInput.id"/>
                </div>
                <div class="form-group">
                    <p>name</p>
                    <input class="form-control" [(ngModel)]="userInput.name" />
                </div>
                <div class="form-group">
                    <p>email</p>
                    <input class="form-control" [(ngModel)]="userInput.email" />
                </div>
               
                <div class="form-group">
                    <button class="btn btn-outline-danger" (click)="addUser()">Add user</button>
                </div>
            </div>

            <hr />
            <h3>Demo ViewChild</h3>
            <p id="txt" #pText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ut, in doloribus molestias, quibusdam quos dolorem accusantium alias nesciunt sapiente nostrum quidem, accusamus voluptas dolor expedita provident. Corrupti, esse sed!</p>
            <button class="btn btn-outline-danger" (click)="submit()">Submit</button>
        </div>
    `
})

//lib - framework
export class PropsDemoComponent implements OnInit {

    userInput: User = { id: '', name: '', avatar: '', email: '' }

    @ViewChild('pText') tagP!: ElementRef;     //Dom đến thẻ p thông qua biến #pText
    @ViewChild('tagProductList') tagProductList!: ProductListComponent;

    constructor() { }
    addUser() {
        let newUser:User = {...this.userInput,avatar:'https://i.pravatar.cc/200?u='+this.userInput.name}

        // console.log('usInput',this.userInput);
        //DOM Đến tag <app-product-list> truy xuất đến thuộc tính arrUser của thẻ đó thêm vào 1 user từ thông tin người dùng nhập vào

        this.tagProductList.arrUser.push(newUser)


        // console.log('tag productList',this.tagProductList)
    }
    ngOnInit() { }

    submit() {
        //Dom thẻ sẽ truy xuất được đến các thuộc tính (innerHTML,style, value,...) và phương thức của thẻ (click(),change(),blur() ...)
        // document.getElementById('txt')!.innerHTML = 'Nam đẹp trai !';
        this.tagP.nativeElement.innerHTML = 'Nam đẹp trai!'
        this.tagP.nativeElement.style.color = 'red';
    }
}

interface User {
    id: string, name: string, avatar: string, email: string
}