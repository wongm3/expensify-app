import { getVisibleExpenses, getExpensesTotal } from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filer by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1]
  ])
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0]
  ])
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[0],
    expenses[1]
  ])
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ])
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[1],
    expenses[2],
    expenses[0]
  ])
});

test('should return 0 if no expenses', () => {
  expect(getExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  expect(getExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  expect(getExpensesTotal(expenses)).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});