import {createStore,combineReducers} from 'redux';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'rent',amount:100}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:300}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

store.dispatch(setTextFilter("e"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
    expenses : [{
        id: 'wrwdv',
        description:'January Rent',
        note:'This was the final payment for that adress',
        amount:54500,
        creaedAt:0
    }],
    filters :{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}
