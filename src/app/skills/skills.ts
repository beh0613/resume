import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  skillCategories = [
    {
      title: 'Core Engineering',
      items: ['OOP', 'SDLC', 'Data Structures', 'REST APIs']
    },
    {
      title: 'Frameworks & Languages',
      items: ['Angular', 'Flutter', 'Java', 'Python', 'Dart', 'Spring Boot', 'HTML, CSS & PHP']
    },
    {
      title: 'Database & Tools',
      items: ['MySQL', 'Git', 'GitHub', 'Postman', 'Docker', 'Supabase']
    }
  ];

}
