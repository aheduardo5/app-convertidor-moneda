import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent implements OnInit {
  titleExchange: string = 'Seleccione la moneda';
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['USD', 'EUR', 'LIBRA'];
  constructor() {}

  ngOnInit(): void {}

  convertir() {
    switch (this.tengo) {
      case 'USD':
        // algo
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.98;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.86;
        }
        break;
      case 'EUR':
        //algo
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.02;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.87;
        }
        break;
      case 'LIBRA':
        //algo
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.17;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.15;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
        break;
    }
  }

}
