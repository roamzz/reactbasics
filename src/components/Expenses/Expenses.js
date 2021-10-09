import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilters/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //you can even create the content here and pass the variable down to the expression
  // let expenseContent = <p>No results found!</p>;

//we can even check here and down in jsx there we just apply only the expenseContent variable
//  if (filteredExpenses.length > 0) {
//    expenseContent = filteredExpenses.map((expense) => (
//      <ExpenseItem
//        title={expense.title}
//        amount={expense.amount}
//        date={expense.date}
//        key={expense.id}
//      />
//    ));
//  }


  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.length === 0 && <p>No results found!</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
