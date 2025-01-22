import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adicionar-tarefa',
  standalone: false,
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.scss'] // Corrigido para styleUrls
})
export class AdicionarTarefaComponent {

  public novaTarefa: string = 'teste';
  public txtBtnAddTarefa: string = 'Adicionar tarefa';

  @Output() novaTarefaAdicionada = new EventEmitter<string>();

  adicionarTarefa() {
    // alert(this.novaTarefa);

    if (this.novaTarefa.trim() !== '') {
      this.novaTarefaAdicionada.emit(this.novaTarefa);
      this.novaTarefa = '';
    }
  }
}
