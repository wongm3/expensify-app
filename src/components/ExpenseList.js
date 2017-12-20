import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense List</h1>
      {
        expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
        )
      }
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
