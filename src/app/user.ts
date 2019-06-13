//class with information about the user that we will use in application
export class User {

  

  constructor(
      public name?: string,
      public password?: string,
      public startTime?:any,
      public endTime?: any
      
      
    ) {  
      if (!name) this.name = '';
      if (!password) this.password = '';
      
    }


   
}
