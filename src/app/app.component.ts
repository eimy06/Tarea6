import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'paper-plane' },
    { title: 'Edad', url: '/edad', icon: 'heart' },
    { title: 'Pais', url: '/pais', icon: 'archive' },
    { title: 'Clima', url: '/clima', icon: 'trash' },
    { title: 'WordPress', url: '/wordpress', icon: 'warning' },
    { title: 'Acerca de', url: '/acerca', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
