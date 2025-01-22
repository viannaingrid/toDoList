import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public titulo = 'Bem-vindo a Lista de Tarefas App';
  public subTitulo = 'Organize suas tarefas de forma fácil e rápido';
}
