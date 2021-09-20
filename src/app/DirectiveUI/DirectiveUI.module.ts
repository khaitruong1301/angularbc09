import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveUIComponent } from './DirectiveUI.component';

import { AntDModule } from '../_core/Shared/Antd.module';
import { DirectiveMaterialComponent } from './DirectiveMaterial.component';
import { MaterialModule } from '../_core/Shared/Material.module';


@NgModule({
    declarations: [DirectiveUIComponent,DirectiveMaterialComponent],
    imports: [FormsModule,CommonModule,AntDModule,MaterialModule],
    exports: [DirectiveUIComponent],
})
export class DirectiveUIModule { }
