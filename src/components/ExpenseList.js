import React from 'react';
import ExpenseListItems from './ExpenseListItem';
import {connect} from 'react-redux';
import getVisibleExpenses from '../components/selectors/expenses'

const ExpenseList = (props)=>(
    <div>
    {props.expenses.map((expense)=>{
        return <ExpenseListItems key={expense.id} {...expense}/>
    })}
    </div>
);

const mapStateToProps = (state)=>{
    return{
        expenses:getVisibleExpenses(state.expenses,state.filters)
    }; 
}
export default connect(mapStateToProps)(ExpenseList);

