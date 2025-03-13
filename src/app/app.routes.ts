import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Assure-toi que ce composant existe

export const routes: Routes = [
  { path: '', component: HeaderComponent },  // Route pour la page d'accueil
  { path: '**', redirectTo: '', pathMatch: 'full' } // Rediriger les routes inconnues vers l'accueil
];
