export class User {

    
private name: string;
private password: any;


 

   /* constructor(data: JSON){
        this.id= data && data ['id'] ?  data['id']:null //check if it is a data and it is id. If yes ok no make received info null  = data && data ['id'] <- condition ? <-valuation data['id'] <- true :null <- false
        this.name= data && data ['name'] ?  data['name']:null
        this.price= data && data ['price'] ?  data['price']:null
            }  <- to check if this will work in our solutions or not
            check if with this solution we can get name  of a user in this array from loading screen thus we will not need to use 2 arrays 
            */ 


constructor(data:any/*date: any, project: string, start:number, finish: number*/){
    this.name = data && data['name']? data['name']:null;
    this.password = data && data['password']? data['password']:null;

   
}
}
