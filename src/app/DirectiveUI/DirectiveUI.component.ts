import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
    selector: 'app-directive-ui',
    template: `
        <div class="container">
            <h3>demo directive</h3>
            <button nz-button nzType="primary">Primary Button</button>
            <button nz-button nzType="default">Default Button</button>
            <button nz-button nzType="dashed">Dashed Button</button>
            <button nz-button nzType="text">Text Button</button>
            <a nz-button nzType="link">Link Button</a>
            <hr />
            <h3>Rate control</h3>
            <nz-rate [(ngModel)]="value" [nzTooltips]="tooltips" (nzOnHoverChange)="hoverRate($event)"></nz-rate>
            <span *ngIf="value" class="ant-rate-text">{{ value ? tooltips[value - 1] : '' }}</span>

            <hr />
            <app-directive-material></app-directive-material>
        </div>
        
    `,
    styles: [`
         [nz-button] {
            margin-right: 8px;
            margin-bottom: 12px;
          }

          [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }

      nz-button-group [nz-button] {
        margin-right: 0;
      }
    `]
})

export class DirectiveUIComponent implements OnInit {
  tooltips = ['tệ', 'cũng được', 'bình thường', 'tốt', 'quá tuyệt vời'];
  value = 4.2;
    size: NzButtonSize = 'large';  
    constructor() { }

    hoverRate(value:number){
      console.log('value',value)
    }
    ngOnInit() { }
}