import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { getVisibleExpenses } from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const { expenses, filters } = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const App = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
