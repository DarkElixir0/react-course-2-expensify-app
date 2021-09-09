import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {Provider} from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter.js';
import {sortByAmount} from './actions/filters';

const store = configureStore();
//store.dispatch(sortByAmount());

store.dispatch(addExpense({description:"water bill", amount:45000}));
store.dispatch(addExpense({description:"gas bill",createdAt:100}));
store.dispatch(addExpense({description:"rent", amount:1095000}));

// store.dispatch(setTextFilter('water'));
// setTimeout(() => store.dispatch(setTextFilter('bill')),3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));