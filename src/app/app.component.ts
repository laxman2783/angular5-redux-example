import { Component ,OnInit} from '@angular/core';
import {Store}  from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

interface AppState {
 //campaigns: Campaign[];
 // value$: number;
 //message:string;

 //count :any=[];
 userId:string;
 title:string;
 


}
interface AppStore {
    appstate: AppState[];
}
 interface CustomAction {
type: string;
payload?: any;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 // title = 'app';
foundBooks:any=[];
  data2:any;
  data:any
  title:Observable<string>;
  
//message$: Observable<string>;


title1$: Observable<Array<AppState>>; 
  constructor(private store :Store <AppStore>,private http: HttpClient){
//this.count$=this.store.select("title");
this.title1$ = store.select( store => store.appstate );
//this.count$ = this.store.select( store => store.countReducer.title);


console.log("count", this.title1$)
  //this.message$ = this.store.select('message');

/*
   for (var key in this.count$) {
    if (this.count$.hasOwnProperty(key)) {
         this.data2 = this.count$[key];
    }
}
   this.data2 = this.transform(this.count$);

   console.log("dta2", this.data2)
 console.log ("subscribe" ,this.store);
*/
console.log("hello World");
  
/*this.store.subscribe(() =>
  //console.log("state", this.store.source)
  console.log(this.store.select('value').source)
  this.store.select('value').subscribe(data => this.value$ = data)
 

  }*
)*/

  }


getData(){
  console.log("ancd");

   return this.http.get(`https://jsonplaceholder.typicode.com/todos/1`)
       // .subscribe(response => response);
  //   .pipe(map((response: any) => response.json()));
.subscribe(
          data => { this.foundBooks = data;
     this.foundBooks = Array.of(this.foundBooks); 
     console.log("Books",this.foundBooks)
           },
          err => console.error(err), 
          () => console.log('getBooks completed') 
          );
      
}

 Increment(){
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
                        .map((res: Response) => {
                          let body = res;
                            return body|| {};
                        })
                        .map((payload: AppState[] ) => {
                            return { type: 'INCREMENT', payload};
                        })
                        .subscribe((action) => {
                          console.log("Action", action)
                            this.store.dispatch(action);
                        });
    
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

