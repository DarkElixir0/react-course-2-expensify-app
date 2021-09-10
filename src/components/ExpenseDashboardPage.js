import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotal from './SelectExpensesTotal';
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseTotal/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;