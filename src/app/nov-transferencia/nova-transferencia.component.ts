import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  valor : number = 0;
  destino : number = 10;
  transferir(  ) {
    console.log("Valor:", this.valor);
    console.log("Destino:", this.destino);
    alert("Você digitou " + this.valor + " para transferencia");
    alert("Você digitou " + this.destino + " para destino");
  }
}
