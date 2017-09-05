export interface IDataService {
    operator:string;
    operand1:number;
    operand2:number;
    result:number;
    operators : object;
    calculate(): void;
    clear(): void;
}
