 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', icon: '/html2.png' },
    { name: 'CSS', icon: '/c1-removebg-preview.png' },
    { name: 'JavaScript', icon: '/j1.png' },
    { name: 'Tailwind css', icon: '/tl-removebg-preview.png' },
    { name: 'Bootstrap', icon: '/b1-removebg-preview.png' },
    { name: 'React', icon: '/r2-removebg-preview.png' },
    { name: 'Angular', icon: '/A1-removebg-preview.png' },
    { name: 'Java', icon: '/jv-removebg-preview.png' },
    { name: 'Spring', icon: '/sp-removebg-preview.png' },
    { name: 'MySQL', icon: '/sq1-removebg-preview.png' },
    { name: 'PHP', icon: '/ph1-removebg-preview.png' },
    { name: 'symfony', icon: '/sfg-removebg-preview.png' },
    { name: 'python', icon: '/py1-removebg-preview.png' },
    { name: 'sqlite', icon: '/sl-removebg-preview.png' },
    { name: 'github', icon: '/git-removebg-preview.png' },
    { name: 'git', icon: '/gt2-removebg-preview.png' },
    { name: 'docker', icon: '/do-removebg-preview.png' },
    { name: 'eclipse', icon: '/ec1-removebg-preview.png' },
    { name: 'vs code', icon: '/vs1-removebg-preview.png' },
    { name: 'android studio', icon: '/ad1-removebg-preview.png' },
  ];
}