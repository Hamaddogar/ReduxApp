import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Step 1  =>make store

//step 2// action // write code word
//step 3 reducers

import {createStore} from 'redux' //  step 1

//Action //  1) type ii) data 
const increment =()=>{
  return{
   type:"INCREMNT"
  }

}
//reducers  //state // action
 const counter =(state=0,action)=>{
 if(action.type=="INCREMNT")
 {
    return state + 1 
 }
   
 }



 
 let store=createStore(counter)// step 1
 store.subscribe(()=>{console.log(store.getState())})
 store.dispatch(increment())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
