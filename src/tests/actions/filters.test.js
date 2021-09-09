import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('should generate set end date',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('should generate sort By Date',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
    });
});

test('should generate sort By Amount',() => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
    });
});

test('should generate set text filter',() => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    });
});



