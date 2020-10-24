import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../components/actions/expenses.action';

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expenses}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expenses.id, expense));
          props.history.push('/dashboard');
        }} />
      <button onClick={() => {      
         props.dispatch(removeExpense({id:props.expenses.id }));
         props.history.push('/dashboard');
      }}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditExpensePage);