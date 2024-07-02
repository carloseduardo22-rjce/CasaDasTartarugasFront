import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, HomeComponent],
  templateUrl: './layout-component.html',
  styleUrls: []
})
export class LayoutComponent {

}
