import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate,setStartDate,setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';

class ExpenseListFilters extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.onDatesChange = this.onDatesChange.bind(this);
    //     this.onFocusChange = this.onFocusChange.bind(this);
    // }

    state = {
        calendarFocused:null
    }

    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    render(){
        return (
            <div>
               <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                    console.log(e.target.value)
                }}/>
                <select value={this.props.filters.sortBy} onChange = {(e) => {
                    if(e.target.value == 'date'){
                        this.props.dispatch(sortByDate());
                    }
                    else{
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput = {this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}/>
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return {
        filters : state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);