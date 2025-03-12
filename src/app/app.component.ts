import { Component , HostListener} from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PartieComponent } from './partie/partie.component';
import { FormatComponent } from './format/format.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , HeroComponent , PartieComponent , FormatComponent , SkillsComponent , ProjectComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetportfolio';
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  @HostListener('window:scroll')
  updateProgress() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollPosition / totalHeight) * 100;
  
    const progressElement = document.querySelector('.scroll-button .progress') as HTMLElement;
    if (progressElement) {
      progressElement.style.top = `${100 - progress}%`;}
    }
}
