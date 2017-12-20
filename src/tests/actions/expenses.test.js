import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  expect(removeExpense({ id: '123abc' })).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  expect(editExpense('123abc', { note: 'New note value' })).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with passed in values', () => {
  expect(addExpense({
    description: 'Rent',
    note: 'This was last months rent',
    amount: 109500,
    createdAt: 1000
  })).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'Rent',
      note: 'This was last months rent',
      amount: 109500,
      createdAt: 1000
    }
  });
});

test('shoudl setup add expense action object with default values', () =>  {
  expect(addExpense()).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});