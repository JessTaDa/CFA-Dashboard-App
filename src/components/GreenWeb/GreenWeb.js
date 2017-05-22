import React, { Component } from 'react';
import './GreenWeb.css';
import axios from 'axios';

export default class GreenWeb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      website: [],
    }
  }

  checkWebsite = () => {
    const URL = `http://api.thegreenwebfoundation.org/greencheck/facebook.com`;
    axios.get(URL)
      .then((response) => {
        console.log(response.data);
        const websites = this.state.website;
        this.setState({ website: [...websites, response.data] });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <h1 onClick={() => { this.checkWebsite() }}>
          FROM GREENWEB COMPONENT
        </h1>
      </div>
    )
  }

}
