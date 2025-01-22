import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvarTarefas(tarefas: string[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }

  obterTarefas(): string[] {
    if (typeof localStorage !== 'undefined') {
      const tarefasString = localStorage.getItem('tarefas');
      return tarefasString ? JSON.parse(tarefasString) : [];
    } else {
      return [];
    }
  }

  limparTarefas() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('tarefas');
    }
  }
}
