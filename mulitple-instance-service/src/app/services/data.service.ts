import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }


  message: string = '';

  setMessage(msg:string){
    this.message=msg;
  }

  getMessage(){
    return this.message;
  }

}
