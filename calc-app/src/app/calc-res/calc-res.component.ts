import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-calc-res',
  templateUrl: './calc-res.component.html',
  styleUrls: ['./calc-res.component.css']
})

export class CalcResComponent {
  number1 = 6;
  number2 = 3;

  get result() : number {
      return this._dataServise.result;
  }

  get sign() : string {
      return this._dataServise.operator;
  }

  get operators():object {
      return this._dataServise.operators;
  }

  constructor(private _dataServise: DataService) { }

  operation (sign) : void {
     this._dataServise.operator = sign;
     this._dataServise.operand1 = this.number1;
     this._dataServise.operand2 = this.number2;
     this._dataServise.calculate();
  }
  
  clear() : void {
    this._dataServise.clear()
  }
}
