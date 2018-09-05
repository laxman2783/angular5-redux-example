import {Action } from  '@ngrx/store';

const InitialState=[{
"userId":"xxxx"

}]


export function simpleReducer(state=InitialState, {type, payload}) {
  console.log(type, state);

  var value;
  switch (type) {
   
    case 'INCREMENT':
      var firstname = "Laxman";
      var lastname = "thota";
console.log("In incremetn");
 alert("Type"+type)
//state =  Object.assign({}, ...state, action.payload;

//state.push(action.payload);
//console.log("State in redux", state)
//return state

return payload;


      //return state =firstname.concat(lastname);
      //return state = state + 1;

    //  return   state= "Hello Spain";
  /*  case 'DECREMENT':
      //  return state="Hello French";
      return state = state - 1;
    case 'RESET':
      //  return state="Hello French";
      return state = 0;*/
    default:
      return state;

  }


}

