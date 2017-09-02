import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
  providers: [DataService]
})
export class CalcComponent implements OnInit {

   @Input() number1 = 2;
   @Input() number2 = 2;
   sign = '+';

   get result() {
       return this._dataServise.result;
   }

  constructor(private _dataServise: DataService) {
    this._dataServise.operator = this.sign;
    this._dataServise.operand1 = this.number1;
    this._dataServise.operand2 = this.number2;
    this._dataServise.calculate();
   }
  
  onNumbersChange()
  {
    if(this.number1 && this.number2)
      {
          this._dataServise.operand1 = this.number1;
          this._dataServise.operand2 = this.number2;
          this._dataServise.calculate();
      }
  }

  ngOnInit() {
  }

}
