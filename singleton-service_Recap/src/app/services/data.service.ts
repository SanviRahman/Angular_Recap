import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  add(n1: number, n2: number) {
    return n1 + n2;
  }


  subtrack(n1: number, n2: number) {
    return n1 - n2;
  }


  multipy(n1: number, n2: number) {
    return n1 * n2;
  }


  divided(n1: number, n2: number) {
    return n1 / n2;
  }


}
