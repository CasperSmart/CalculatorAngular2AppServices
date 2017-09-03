import { Injectable } from '@angular/core';
import { IDataService } from './idata-service';

@Injectable()
export class DataService implements IDataService {

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

  operators = {
    add :'+',
    subtract: '-',
    divide: '/',
    multiply : '*'
  }
  
  private compute = {
    [this.operators.add]: (x:number, y:number) => x + y,
    [this.operators.subtract]: (x:number, y:number) => x - y,
    [this.operators.multiply]: (x:number, y:number) => x * y,
    [this.operators.divide]: (x:number, y:number) => x / y
  }

  constructor() { }
  
   calculate() {
      this._result = this.compute[this._operator](this._operand1,this._operand2);
   }

   clear() {
     this._operand1 = NaN;
     this._operand2 = NaN;
     this._result = NaN;
     this.operator = '';
   }
  }