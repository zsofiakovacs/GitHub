export class Report {

private date: any;
private project: string;
private start:number;
private finish: number;

 

   /* constructor(data: JSON){
        this.id= data && data ['id'] ?  data['id']:null //check if it is a data and it is id. If yes ok no make received info null  = data && data ['id'] <- condition ? <-valuation data['id'] <- true :null <- false
        this.name= data && data ['name'] ?  data['name']:null
        this.price= data && data ['price'] ?  data['price']:null
            }  <- to check if this will work in our solutions or not
            check if with this solution we can get name  of a user in this array from loading screen thus we will not need to use 2 arrays 
            */ 


constructor(data:any /*<- Do we need to use Object instead of any? */
    
    /*date: any, project: string, start:number, finish: number*/){
    this.date = data && data['date']? data['date']:null;
    this.project = data && data['project']? data['project']:null;
    this.start = data && data['start']? data['start']:null;
    this.finish = data && data['finish']? data['finish']:null;
   
}

}
