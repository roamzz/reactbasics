import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
       id: Math.random().toString()
    };
    console.log(newExpenseData);
    props.onAddExpense(newExpenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
