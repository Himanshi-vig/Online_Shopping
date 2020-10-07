export class orderPlaceDeatails{

    id :number;
   
    quantity:number;
    
    productId :number;

    userId:number;
   
    orderPlaceDeatails(id:number,quantity:number,productId:number,userId:number){

        this.id=id;
        this.quantity=quantity;
        this.productId=productId;
        this.userId= id;



    }
   
    }