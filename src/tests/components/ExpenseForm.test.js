import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(0).simulate(('change'), {
    target: {
      value: 'New description'
    }
  });
  expect(wrapper.state('description')).toBe('New description');
});

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').at(0).simulate(('change'), {
    target: {
      value: 'New description'
    }
  });
  expect(wrapper.state('note')).toBe('New description');
});

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate(('change'), {
    target: {
      value: '23.50'
    }
  });
  expect(wrapper.state('amount')).toBe('23.50');
});

test('should not set amount if invalid input', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate(('change'), {
    target: {
      value: '12.122'
    }
  });
  expect(wrapper.state('amount')).toBe('');
});