import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { getExpensesTotal } from '../../selectors/expenses';

test('should render ExpensesSummary with an expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={getExpensesTotal([expenses[0]])} />);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={getExpensesTotal(expenses)} />);

  expect(wrapper).toMatchSnapshot();
});