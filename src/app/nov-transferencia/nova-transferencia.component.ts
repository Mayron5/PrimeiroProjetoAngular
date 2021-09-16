import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>(); // Instancia de saida que envia qualquer tirpo de dado

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    const valores: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionarTransferencia(valores).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

}
