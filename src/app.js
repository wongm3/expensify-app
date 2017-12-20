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

const App = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
