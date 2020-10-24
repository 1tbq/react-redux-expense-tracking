import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';


const addExpense =(
    {
        description='',
        note = '',
        amount = 0,
        createdAt = 0
    }
)=>({
    type:'ADD_EXPENSE',
    expense:{
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        description,
        note,
        amount,
        createdAt
    }
});

const addFilter = (text='')=>(
    {
        type:'ADD_FILTER',
        text
    }
)
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        default:
            return state
    }
};


const filterReducerDefaultState ={
    text:'rent',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filterReducer =(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_FILTER':
            return {
                ...state,
                text:action.text
            }
        default:
            return state
    }
};


const store = createStore(
    combineReducers({
         expenses:expensesReducer,
         filter:filterReducer
    })
    // expensesReducer
);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(addFilter('filter by date'));
 store.dispatch(addExpense({description:'Rent', amount: 454121}));
const demoState = {
    expense: [{
        id: '1fd12e4e64er2we3r',
        description: 'January Rent',
        note: 'This is final rent for the year',
        amount: 52552,
        createdAt: 0
    }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}



class ReduxPlayground extends Component {
    render() {
        return (
            <div>
                <h1>hello from playground</h1>
            </div>
        );
    }
}
export default ReduxPlayground;

