import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CityList from "../containers/city_list";
import { Carousel, Jumbotron , Grid, Row } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img width={1150} height={400} alt="900x500" src="../../images/helsinki.jpg" />
                    <Carousel.Caption>
                        <h3>Sunny Day in Helsinki</h3>
                        <p>Perfect weather for a walk around the city</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1150} height={400} alt="900x500" src="../../images/Northern-Lights.jpg" />
                    <Carousel.Caption>
                        <h3>Spetacular Aurora Sky</h3>
                        <p>View the amazing Aurora night sky in Rovaniemi</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1150} height={400} alt="900x500" src="../../images/cinema.jpg" />
                    <Carousel.Caption>
                        <h3>Finkino Theater</h3>
                        <p>Catch the latest movies with friends and family</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Jumbotron>
                    <h1 className="display-4 font-weight-normal">Weather & Movies</h1>
                    <p className="lead font-weight-normal">Type in a city name in Finland to see the weather and available movies</p>
                    <SearchBar />
            </Jumbotron>

            <Grid>
                <Row className="show-grid">
                    <CityList/>
                </Row>
            </Grid>
        </div>
    );
  }
}
