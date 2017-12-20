import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  expect(setStartDate(0)).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate end start date action object', () => {
  expect(setEndDate(0)).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter action object with text value', () => {
  expect(setTextFilter('Something in')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Something in'
  })
});

test('should generate set text filter action object with default', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  })
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});