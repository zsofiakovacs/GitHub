
export class User {

  constructor(
      public name?: string,
      public password?: string,
      public startTime?:number,
      public endTime?: number
      
    ) {  
      if (!name) this.name = '';
      if (!password) this.password = '';
    }
}
