import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private _operator : string
  private _operand1 : number
  private _operand2 : number
  private _result : number

  get operator(){
    return this._operator
  }

  set operator(value){
    this._operator = value;
  }

  get operand1(){
    return this._operand1;
  }

  set operand1(value){
    this._operand1 = value;
  }

  get operand2(){
    return this._operand2;
  }

  set operand2(value){
    this._operand2 = value;
  }

  get result(){
    return this._result
  }

  set result(value){
    this._result = value;
  }
  
  private _calculate = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
   }

  constructor() { }
  
   calculate(): void {
        this._result = this._calculate[this._operator](this._operand1,this._operand2);
   }

   clear(): void {
     this._operand1 = NaN;
     this._operand2 = NaN;
     this._result = NaN;
     this.operator = '';
   }
}
