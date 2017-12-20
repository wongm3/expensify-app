import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ match: { params: { id } }, expense, dispatch, history }) => (
  <div>
    <h1>Edit Expense</h1>
    <ExpenseForm
      expense={expense}
      onSubmit={(expense) => {
        dispatch(editExpense(id, expense));
        history.push('/');
      }}
    />
    <button onClick={() => {
      dispatch(removeExpense({ id }));
      history.push('/');
    }}>Remove</button>
  </div>
);

const mapStateToProps = ({ expenses }, { match: { params: { id } } }) => {
  return {
    expense: expenses.find(expense => expense.id === id)
  }
};

export default connect(mapStateToProps)(EditExpensePage);