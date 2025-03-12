import { Component , HostListener , OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false; // Par défaut, le menu est fermé

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Inverser l'état du menu
  }

}
