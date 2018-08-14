import { Component } from '@angular/core';
import {Store}  from '@ngrx/store';

import { Observable } from 'rxjs/Observable';


interface AppState {

 // value$: number;
 //message:string;
 countReducer:{
 count :number;
 }

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
//message$: Observable<string>;
count$: Observable<number>;

  constructor(private store :Store <AppState>){
  //this.message$ = this.store.select('message');
  this.count$ = this.store.select('count');
 console.log ("subscribe" ,this.store);
console.log("fewrfwer", this.count$);
console.log("hello World");
  
/*this.store.subscribe(() =>
  //console.log("state", this.store.source)
  console.log(this.store.select('value').source)
  this.store.select('value').subscribe(data => this.value$ = data)
 

  }*
)*/


  }
Increment(){
this.store.dispatch({ type: 'INCREMENT' })
}

// 2
Decrement(){
this.store.dispatch({ type: 'DECREMENT' })
}

resetCount(){
this.store.dispatch({ type: 'RESET' })

}
}




  

// 1

