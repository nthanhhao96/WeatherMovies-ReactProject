import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from "../components/google_map";
import {Link} from 'react-router-dom';
import { Col } from 'react-bootstrap';

class CityList extends Component {
    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight); // Scroll to the result (which is at bottom of the page)
    }
    renderCity(cityData, i) {
        const name = cityData.city.name;
        const { lat , lon } = cityData.city.coord;
        return (
            <div key={i}>
                <Col md={6} lg={4}>
                    <div>
                        <h2 className="display-5">{name}</h2>
                        <Link className="btn btn-primary" to={`/weather/${i}/${name}`}>Weather</Link>
                        <Link className="btn btn-success" to={`/movies/${name}`}>Movies</Link>
                        <p></p>
                    </div>
                    <div className="map"><GoogleMap lat={lat} lon={lon}/></div>
                </Col>
            </div>
        );
    }
    render() {

        return(
            <div>
                {this.props.weather.map(this.renderCity)}
            </div>
        );
    }
}


function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(CityList);