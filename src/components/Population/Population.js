import React, { Component } from 'react';
import './Population.css';
import axios from 'axios';

export default class GreenWeb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      population: 0
    }
  }

  getPopulation = () => {
    const URL = `http://api.population.io:80/1.0/population/World/today-and-tomorrow/`
    axios.get(URL)
      .then((response) => {
        console.log(response.data.total_population[1].population);
        const pop = response.data.total_population[1].population;

        this.setState({
          population: pop
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
      {this.getPopulation()}
      <h5>World Population today: <span><h3> {this.state.population} </h3> </span></h5>
      </div>
    )
  }
}