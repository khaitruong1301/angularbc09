import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
  ],
  imports: [CommonModule],

  // exports các component khi muốn sử dụng bên ngoài module
  exports: [
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // ContentComponent,
    HomeComponent
  ],
})
export class HomeModule {}
