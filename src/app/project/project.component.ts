import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Ajoute RouterModule

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = [
    {
      title: 'Coducatif',
      description: 'An interactive educational game designed to facilitate online learning. Developed using Android Studio.    Duration : 2 Months , Agile Methodology - Scrum, with 4 team members and 2 sprints. ',
      image: '/cd2.png',
      technologies: ['Java', 'SQLite', 'Firebase'],
      link: 'https://github.com/Salma-azz23/coducatif.git'
    },
    {
      title: 'HIRAFI',
      description: 'A platform designed to connect Moroccan artisans with their customers while offering a smooth and complete user experience. Duration : 2 months , Agile Methodology - Scrum, with 3 team members and 2 sprints.',
      image: '/hr.png',
      technologies: ['React', 'Spring boot', 'MySQL'],
      link: 'https://github.com/fatima236/HIRAFI_REACT.git'
    },
    {
      title: 'MEDPHARMA',
      description: 'Platform for managing medical and cosmetic products and orders for pharmacies.Agile Methodology - and 1 sprint.         Duration : 1 month     ',
      image: '/medic.png',
      technologies: ['Symfony', 'MySQL'],
      link: 'https://github.com/chaimaeb627/MEDPHARMA.git'
    },
    {
      title: 'Portfolio',
      description: 'Welcome to my portfolio! Explore the projects I’ve created.Dive into my projects, skills, and experiences.Duration: 2 weeks ',

      image: '/bb.png',
      technologies: ['Angular' , 'Bootstrap'],
      link: 'https://github.com/chaimaeb627/My-Portfolio.git'
    }
  ];
  viewDetails(project: any) {
    console.log("Détails du projet :", project);
    alert(`Titre : ${project.title}\nDescription : ${project.description}`);
  }
  
}