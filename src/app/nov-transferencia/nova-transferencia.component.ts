import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>(); // Instancia de saida que envia qualquer tirpo de dado

  valor: number;
  destino: number;

  transferir() {
    const valores = {valor : this.valor, destino : this.destino};
    this.aoTransferir.emit(valores);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = null ;
    this.destino = null;
  }
}
