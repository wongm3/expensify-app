import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {

  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    const { filters, dispatch } = this.props;
    return (
      <div>
        <input type="text" value={filters.text} onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}/>
        <select value={filters.sortBy} onChange={(e) => {
          if (e.target.value === 'amount') {
            dispatch(sortByAmount());
          } else if (e.target.value === 'date') {
            dispatch(sortByDate());
          }
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => {
  return {
    filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);
