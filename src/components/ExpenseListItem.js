import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItems = ({ id, description, amount, createdAt }) => {
  return (<div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <h3>{amount} - {createdAt}</h3>
  </div>)
}

export default ExpenseListItems;
