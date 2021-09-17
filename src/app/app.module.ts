import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './Hello/hello.component';
import { DemoComponent } from './demo/demo.component';

import { HomeModule } from './home/home.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Baitap4Component } from './baitap4/baitap4.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PropsModule } from './Props/Props.module';

// Typescript decorator
// NgModule: Khai báo AppModule là 1 module
// Module: Là 1 group quản lý các components
@NgModule({
  // meta-data

  // declarations: Khai báo các component do module này quản lý
  // component bắt buộc phải được 1 module quản lý
  declarations: [
    AppComponent,
    HelloComponent,
    DemoComponent,
    DataBindingComponent,
    Baitap4Component,
    StructuralDirectivesComponent,
  ],

  // imports: Khai báo các module cần sử dụng
  // Ta chia thành 2 loại module:
  // - Module do angular cung cấp: FormsModule, RouterModule,...
  // - Module do mình tạo ra: HomeModule có các components là Header, Footer, Sidebar, Content => Để sử dụng được các component này bên trong AppComponent ta cần gắn HomeModule vào mảng imports
  imports: [
    BrowserModule, FormsModule,
    HomeModule, Baitap2Module,PropsModule
  ],

  // 2 phần này chỉ duy nhất AppModule cần khai báo
  // providers: Nơi khai báo các services cần sử dụng
  providers: [],
  // bootstrap: Khai báo AppComponent là component gốc của module
  bootstrap: [AppComponent],
})
export class AppModule {}
