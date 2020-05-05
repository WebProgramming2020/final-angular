//interface file modelled on my database
export interface IData {
    Currency:string;
    Rate:string;
    Date:string;
}
export class Data implements IData {
    Currency:string;
    Rate:string;
    Date:string;

    constructor(Currency: string, Rate: string, Date: string) {
        this.Currency = Currency;
        this.Rate = Rate;
        this.Date = Date;
    }
}