import { toMomentObject } from 'react-dates';
import {addExpense,editExpense,removeExpense} from '../../actions/expenses'

test('should remove expense',() => {
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should edit expense',() => {
    const action = editExpense('123',{note:'hii'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123',
        updates:{
            note:'hii'
        }
    });
});

test('should set up add expense',() => {
    const expenseData = {
        description:"rent",
        amount:1000,
        createdAt:1000,
        note:"hii",
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});

test('should set up add expense',() => {
    const expenseData = {
        description:"",
        amount:0,
        createdAt:0,
        note:"",
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});