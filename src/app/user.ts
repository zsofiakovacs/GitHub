
export class User {

  

  constructor(
      public name?: string,
      public password?: string,
      public startTime?:any,
      public endTime?: any,
      public duel?: string,
      public salt?: string
      
    ) {  
      if (!name) this.name = '';
      if (!password) this.password = '';
      if (!duel) this.duel = '';
      if (!salt) this.duel = '';
    }


   
}
