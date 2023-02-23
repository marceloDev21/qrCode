import { Cartao } from './cartao';
import { Component } from '@angular/core';

import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'QRCodeGenerator';
  // elementType = NgxQrcodeElementTypes.URL;
  // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  // value = '';

  qrCodes = new Array<Cartao>();
  cartoes: any;


  constructor() {}

  ngOnInit(): void {
    this.getCredencial()
  }

  getCredencial() {
    for (let i = 1; i <= 1000; i++) {
      let cartao = new Cartao();
      cartao.credencial = String(('000000' + (i)).slice(-6));

      this.qrCodes.push( cartao);
    }
    console.log(this.qrCodes)
  }
}
