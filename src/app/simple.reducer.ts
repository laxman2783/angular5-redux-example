import {Action } from  '@ngrx/store';




export function simpleReducer(state: number = 0, action: Action) {
  console.log(action.type, state);

  var value;
  switch (action.type) {
    case 'INCREMENT':
      var firstname = "Laxman";
      var lastname = "thota";



      //return state =firstname.concat(lastname);
      return state = state + 1;

    //  return   state= "Hello Spain";
    case 'DECREMENT':
      //  return state="Hello French";
      return state = state - 1;
    case 'RESET':
      //  return state="Hello French";
      return state = 0;
    default:
      return state;

  }


}

