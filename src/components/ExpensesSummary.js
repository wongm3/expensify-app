import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getVisibleExpenses, getExpensesTotal } from '../selectors/expenses';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    Viewing { expensesCount } expense{ expensesCount !== 1 && 's' } totalling { numeral(expensesTotal / 100).format('$0,0.00') }
  </div>
);

const mapStateToProps = ({ expenses, filters }) => ({
  expensesCount: getVisibleExpenses(expenses, filters).length,
  expensesTotal: getExpensesTotal(getVisibleExpenses(expenses, filters))
});

export default connect(mapStateToProps)(ExpensesSummary);