import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const pizzaList = (state = [], action) => {
	if (action.type === 'PIZZA_LIST') {
		return action.payload;
	}
	return state;
};

const customerInfo = ( state = {}, action ) => {
  if (action.type === 'ADD_NEW_CUSTOMER') {
    //update state to add the name to the list
    console.log('in CustomerInfo reducer, payload is: ', action.payload)

    return  {...state, customer: action.payload}
  }
  return state;
}
// Test value please remove, state should default to []
const orderList = ( state=[], action) => {
  if(action.type === 'ADD_MENU_ITEM'){
    console.log('in reducer, payload is: ', action.payload)
    return [ ...state, action.payload ]
  }
  return state;
}

const convertPizzas = ( state = {}, action) => {
  if(action.type === 'CONVERT_PIZZAS'){
    let orderedPizzaInfo = [];
    let allPizzas = action.payload.allPizzas;
    let orderedPizzaArray = action.payload.orderedPizzaArray;

    for (const eachPizza in allPizzas) {
      for (let i=0; i<orderedPizzaArray.length; i++) {
        if (eachPizza.id === orderedPizzaArray[i]) {
          orderedPizzaInfo.push(eachPizza);
        }
      }
    }

    return orderedPizzaInfo;}
  return state;
}


// Create the Redux store - place to keep our shared data
// All reducers run each time an action is dispatched
const storeInstance = createStore(
  combineReducers( {
    orderList,
    pizzaList,
    customerInfo,
    convertPizzas,
  } ),
  applyMiddleware( logger )
)

// Use the Provider to share the Redux store with the App
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
