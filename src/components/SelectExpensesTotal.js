import React from 'react'
import { connect } from "react-redux";
import getVisibleExpenses from '../selectors/expenses';
import { getTotalExpenses,getTotalExpenseAmount } from '../selectors/selectExpensesTotal';
import numeral from 'numeral';

const expenseTotal = (props) => {
    let expenses = "expenses";
    if(props.expenses.length==1)expenses="expense"
    return(
    <div>
        {props.expenses.length==0? <h1>No expenses to show summarry!</h1>:<h1>Viewing {getTotalExpenses(props.expenses)} {expenses} totalling {numeral(getTotalExpenseAmount(props.expenses)/100).format('$0,0.00')}</h1>}
    </div>
    )
};

const mapToStateProps = (state) =>{
    return {
        expenses : getVisibleExpenses(state.expenses,state.filters)
    };
}

export default connect(mapToStateProps)(expenseTotal);

//numeral(getTotalExpenseAmount(props.expenses)/100).format('$0,0.00')