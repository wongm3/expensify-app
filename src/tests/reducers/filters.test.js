import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  expect(filtersReducer(undefined, {
    type: '@@INIT'
  })).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to date', () => {
  expect(filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT'
  }).sortBy).toBe('amount');
});

test('should set sortBy to amount', () => {
  expect(filtersReducer({
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }, {
    type: 'SORT_BY_DATE'
  }).sortBy).toBe('date');
});

test('should set text filter', () => {
  expect(filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'some text'
  }).text).toBe('some text');
});

test('should set startDate', () => {
  const startDate = moment();

  expect(filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  }).startDate).toEqual(startDate);
});

test('should set endDate', () => {
  const endDate = moment();

  expect(filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  }).endDate).toEqual(endDate);
});