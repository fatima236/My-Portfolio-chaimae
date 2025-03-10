import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PartieComponent } from './partie/partie.component';
import { FormatComponent } from './format/format.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , HeroComponent , PartieComponent , FormatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetportfolio';
}
