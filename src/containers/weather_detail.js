import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import {Label} from 'react-bootstrap';

class WeatherDetail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to top of the page
    }

    render() {
        const {id} = this.props.match.params; // id of the city (coming from pathname)

        const name = this.props.weather[id].city.name;
        const temps = this.props.weather[id].list.map(weather => weather.main.temp);
        const pressures = this.props.weather[id].list.map(weather => weather.main.pressure);
        const humidities = this.props.weather[id].list.map(weather => weather.main.humidity);
        const wind = this.props.weather[id].list.map(weather => weather.wind.speed);
        return (
            <div>
                <h5>The weather chart for 5 days in your selected city.</h5>
                <div>
                    <h1>
                        Weather detail <Label>{name}</Label>
                    </h1>

                    <div>
                        <h4>Temperature (K)</h4>
                        <p>Note: 0°C = 273.5K</p>
                        <Chart data={temps} color="red" units="K"/>
                    </div>
                    <div>
                        <h4>Pressure (hPa)</h4>
                        <Chart data={pressures} color="green" units="hPa"/>
                    </div>
                    <div>
                        <h4>Humidity (%)</h4>
                        <Chart data={humidities} color="blue" units="%"/>
                    </div>
                    <div>
                        <h4>Wind (m/s)</h4>
                        <Chart data={wind} color="orange" units="m/s"/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherDetail);