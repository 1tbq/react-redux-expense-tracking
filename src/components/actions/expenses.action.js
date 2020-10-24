//Addexpense
export const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      description,
      note,
      amount,
      createdAt
    }
  });
  
  // REMOVE_EXPENSE
  export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  