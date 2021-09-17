import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './Product.component';
import { ProductListComponent } from './ProductList.component';
import { PropsDemoComponent } from './Props.component';



@NgModule({
    declarations: [ProductComponent,ProductListComponent,PropsDemoComponent],
    imports: [CommonModule,FormsModule],
    exports: [PropsDemoComponent],
    
})
export class PropsModule { }
