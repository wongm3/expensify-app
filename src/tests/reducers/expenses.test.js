import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  expect(expensesReducer(undefined, {
    type: '@@INIT'
  })).toEqual([]);
});

test('should remove expense by id', () => {
  expect(expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  })).toEqual([
    expenses[0],
    expenses[2]
  ])
});

test('should not remove expenses if id not found', () => {
  expect(expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  })).toEqual(expenses)
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Gas',
    note: '',
    amount: 8000,
    createdAt: 0
  };

  expect(expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    expense
  })).toEqual([
    ...expenses,
    expense
  ])
});

test('should edit an expense', () => {
  const updates = {
    amount: 95
  };

  expect(expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  })[1].amount).toBe(95);
});

test('should not edit an expense if id not found', () => {
  const updates = {
    amount: 95
  };

  expect(expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates
  })).toEqual(expenses);
});