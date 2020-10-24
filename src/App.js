import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
 
import configureStore from './components/store/configureStore'
import { addExpense } from './components/actions/expenses.action';
import getVisibleExpenses from './components/selectors/expenses';



const store = configureStore();
store.dispatch(addExpense({ description: 'Month rent', amount: 11000,createdAt:2500 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 11000,createdAt:450 }));
store.dispatch(addExpense({ description: 'water bill', amount:9200,createdAt:1581713965000 }));
// store.dispatch(setTextFilter('rent'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);



function App() {
  return (
    <Provider store ={store}>
      <AppRouter />
     </Provider>
  );
}

export default App;
