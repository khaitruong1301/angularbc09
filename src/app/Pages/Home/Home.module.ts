import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutPageComponent } from './About.component';
import { ContactPageComponent } from './Contact.component';
import { HomePageComponent } from './Home.component';


@NgModule({
    declarations: [ContactPageComponent,AboutPageComponent,HomePageComponent],
    imports: [CommonModule,FormsModule],
    exports: [],

})
export class HomeModule { }
