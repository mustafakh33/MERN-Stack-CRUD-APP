import { Component } from '@angular/core';
import { Data, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf , NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sunrise';
}

