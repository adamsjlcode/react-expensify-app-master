import React from 'react'
import {connect} from 'react-redux'
import 'react-dates/initialize'
import {DateRangePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = ({calendarFocused}) => {
        this.setState(() => ({ calendarFocused }))
    };
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select name="" id="" value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount());
                    }else if (e.target.value === 'date')
                        this.props.dispatch(sortByDate());
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="start_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="end_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);
