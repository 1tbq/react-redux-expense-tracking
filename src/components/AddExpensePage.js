import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux'
import { addExpense } from '../components/actions/expenses.action';

const AddExpensePage = (props) => (
    <div>
      <ExpenseForm onSubmit ={(expense)=>{
        props.dispatch(addExpense(expense));
        props.history.push('/dashboard');
      }}
      />
    </div>
  );

export default connect()(AddExpensePage) ;  