import {createStore} from 'redux';

const store = createStore((state={count:0},action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count+1
            };
        case 'DECREMENT':
            const dec = typeof action.decrementBy=="number"?action.decrementBy:1;
            return{
                count:state.count-dec
            };
        case 'RESET':
            return{
                count:0
            };
        default:
            return state;
    }
});


const unsubscribe = store.subscribe (() =>{
    console.log(store.getState());
});


store.dispatch({
    type : "INCREMENT"
});

store.dispatch ({
    type: 'DECREMENT',
    decrementBy:5
});

unsubscribe();

store.dispatch({
    type: 'RESET'
});

