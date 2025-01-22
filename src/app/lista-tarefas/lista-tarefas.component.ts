import { LocalStorageService } from './../local-storeage.service';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  standalone: false,

  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent implements OnInit{
  public txtTitulo: string = "Lista de Tarefas";
  public txtBtnReiniciar: string = "Reiniciar Lista";
  public txtBtnConcluir: string = "Concluir";

  public tarefas: string[] = ['Estudar Framework Angular', 'Realizar Projetos Pessoais', 'Criar um Portifólio']

  constructor(private localStorage: LocalStorageService){
    this.tarefas = this.localStorage.obterTarefas();

  }

  ngOnInit() : void {
    this.tarefas = this.localStorage.obterTarefas();
  }

  reiniciarLista() {
    // alert("Teste de botão Reiniciar");
    this.localStorage.limparTarefas();
    this.tarefas = [];
  }

  concluirTarefa(tarefa: string) {
    // alert("Teste de botão concluir tarefas");
    this.tarefas = this.tarefas.filter(item => item !== tarefa);
    this.localStorage.salvarTarefas(this.tarefas);
  }

  adicionarTarefas(novaTarefa: string){
    this.tarefas.push(novaTarefa);
    this.localStorage.salvarTarefas(this.tarefas);
  }
}
