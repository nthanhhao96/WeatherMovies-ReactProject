import React, {Component} from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/fetch_movies';
import {Label} from 'react-bootstrap';

class MoviesDetail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to top of the page

        const {name} = this.props.match.params; // City name (coming from pathname)
        this.props.fetchMovies(name); // Go and fetch movies data
    }

    render() {
        const {name} = this.props.match.params;
        const parser = new DOMParser();
        const xml = parser.parseFromString(this.props.movies, 'text/xml'); // Parse the xml data

        let moviesNumber = xml.getElementsByTagName('ID').length;

        let table = [];
        for (let i = 0; i < moviesNumber; i++) {
            table.push(
                <tr key={xml.getElementsByTagName('ID')[i].childNodes[0].nodeValue}>
                    <td><Moment
                        format="YYYY/MM/DD HH:mm">{xml.getElementsByTagName('dttmShowStart')[i].childNodes[0].nodeValue}</Moment>
                    </td>
                    <td>{xml.getElementsByTagName('Title')[i].childNodes[0].nodeValue}</td>
                    <td>{xml.getElementsByTagName('OriginalTitle')[i].childNodes[0].nodeValue}</td>
                    <td>{xml.getElementsByTagName('LengthInMinutes')[i].childNodes[0].nodeValue}</td>
                    <td>{xml.getElementsByTagName('Theatre')[i].childNodes[0].nodeValue}</td>
                    <td><a href={xml.getElementsByTagName('EventURL')[i].childNodes[0].nodeValue}
                           target="_blank">Detail</a></td>
                    <td><a href={xml.getElementsByTagName('ShowURL')[i].childNodes[0].nodeValue}
                           target="_blank">Tickets</a></td>
                </tr>
            )
        }
        return (
            <div>
                <h5>Today movies at Finkino cinema in your selected city.</h5>
                    <h1>
                        Movies detail <Label>{name}</Label>
                    </h1>
                <p>Note: If there are no Finkino cinema in selected city, the movies at all city will be shown.</p>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Title</th>
                        <th>Original Title</th>
                        <th>Length (minutes)</th>
                        <th>Theatre</th>
                        <th>Movie Detail</th>
                        <th>Buy tickets</th>
                    </tr>
                    </thead>
                    <tbody>
                    {table}
                    </tbody>
                </table>
            </div>


        );
    }
}

function mapStateToProps({movies}) {
    return {movies}
}

export default connect(mapStateToProps, {fetchMovies})(MoviesDetail);