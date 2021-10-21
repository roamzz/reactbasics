import React, { useState } from 'react';

import ExpenseFilter from './ExpensesFilters/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <list>
        <Card className='expenses'>
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </list>
    </div>
  );
};

export default Expenses;
