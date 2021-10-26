import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm(true);
  };

  const closeFormHandler = (val) => {
    setShowForm(val);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
    //close the form
    setShowForm(false);
  };
  return (
    <div className='new-expense'>
      {!showForm && (
        <button onClick={showExpenseForm}>Add new expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClicked={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
