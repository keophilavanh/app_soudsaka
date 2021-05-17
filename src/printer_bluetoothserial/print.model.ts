export class printer_model {
    
    titel:string;
    invoid_name:string;
    ticket_number:number;
    ticket_customer:string;
    ticket_table:string;
    ticket_date:string;
    productDetails: Array<item_model>;
    amount:number;
    tax:number;
    discount:number;
    total:number;

}

export class item_model {
    name:string;
    qty:number;
    price:number;
    total:number;

    constructor() {
        this.name = "";
        this.qty = 0;
        this.price = 0;
        this.total = 0;
      }
}