import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, Education, Certificate, Project, Skill } from './about.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  experiences: Experience[] = [
    {
      title: 'Frontend Developer',
      company: 'New Ocean Information System.',
      period: '10/2023 - Present',
      description: [
        'Migrating and Upgrading: Upgraded the core web platforms from Angular 14 to Angular 18, ensuring backward compatibility and a smooth transition for both User and Admin interfaces.',
        'UI/UX Development: Designed and implemented responsive, scalable UIs using TailwindCSS, SCSS, and Ant Design of Angular to enhance usability and maintainability.',
        'Component Development: Built reusable Angular components, handled complex form interactions, and optimized data rendering with RxJS and NGX.',
        'State Management: Applied NgRx for effective state management in large-scale modules.',
        'Integration with Back-End: Collaborated with back-end developers (C# .NET and MongoDB) to consume RESTful APIs, manage authentication flows, and handle data interactions.',
        'Tools & Practices: Used Moment.js for date/time logic, practiced Agile development, and utilized tools like Jira, Postman, and Visual Studio Code for efficient workflow.',
      ],
      technologies: ['Angular', 'TailwindCSS', 'SCSS', 'Ant Design', 'RxJS', 'NGX', 'NgRx', '.NET Core', 'MongoDB', 'Jira', 'Postman', 'Visual Studio Code']
    },
  ];

  education: Education[] = [
    {
      degree: 'Information Technology',
      school: 'SaiGon University',
      period: '2019 - 2024',
      description: 'Specialized in Software Engineering with focus on web development'
    },
  ];

  certificates: Certificate[] = [
    {
      name: 'CERTIFICATE OF TOEIC',
      issuer: 'Reading and Listening (575)',
      issueDate: '2023',
      expiryDate: '2025',
      description: 'Reading and Listening Skills'
    },
    {
      name: 'CERTIFICATE OF TOEIC',
      issuer: 'Writing and Speaking (270)',
      issueDate: '2023',
      expiryDate: '2025',
      description: 'Writing and Speaking Skills'
    }
  ];

  projects: Project[] = [
    {
      name: 'Calendar List FrontEnd' ,
      description: 'A calendar list application with a modern UI and smooth animations that helps you manage your tasks and events.',
      technologies: ['Angular', 'Tailwind CSS', 'RxJS'],
      link: 'https://todolist-angular-tau.vercel.app/dashboard/calendar-self',
      github: 'https://github.com/dieo20011/Front_End_ToDoList'
    },
    {
      name: 'Calendar List Backend',
      description: 'Collaborative task management application with real-time updates and team collaboration features',
      technologies: ['.NET Core', 'Entity Framework', 'MongoDB'],
      github: 'https://github.com/dieo20011/BE_ToDoList'
    },
  ];

  skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'RxJS', 'NgRx']
    },
    {
      category: 'Backend',
      items: ['.NET Core', 'C#', 'Entity Framework', 'ASP.NET Web API', 'SignalR']
    },
    {
      category: 'Database',
      items: ['SQL Server', 'MongoDB']
    },
    {
      category: 'Tools & DevOps',
      items: ['Git', 'Docker', 'Azure', 'Visual Studio', 'VS Code', 'Postman', 'Azure DevOps']
    },
    {
      category: 'Methodologies',
      items: ['Agile', 'Scrum', 'Clean Architecture']
    }
  ];
}
