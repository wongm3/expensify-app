import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getVisibleExpenses, getExpensesTotal } from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div>
    <h1>Viewing { expenseCount } { expenseCount !== 1 ? 'expenses' : 'expense' } totalling { numeral(expensesTotal / 100).format('$0,0.00') }</h1>
  </div>
);

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = getVisibleExpenses(expenses, filters);

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);