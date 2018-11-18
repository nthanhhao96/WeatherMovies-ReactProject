import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/fetch_weather';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}; // Initialize state
        this.onInputChange = this.onInputChange.bind(this); // Bind 'this.onInputChange' function to 'this', and then replace it with 'this.onInputChange'
        this.onFormSubmit = this.onFormSubmit.bind(this); // Bind 'this.onFormSubmit' function to 'this', and then replace it with 'this.onFormSubmit'
    }

    onInputChange(event) {
        this.setState({term: event.target.value}); // Set state whenever user enter some text
    }

    onFormSubmit(event) {
        event.preventDefault(); // Prevent the browser from submitting the form
        this.props.fetchWeather(this.state.term); // Go and fetch weather data
        this.setState({term: ''}); // Clear the search input
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Search for cities in Finland"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);