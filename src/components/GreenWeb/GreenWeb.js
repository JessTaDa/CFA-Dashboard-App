import React, { Component } from 'react';
import './GreenWeb.css';
import axios from 'axios';

export default class GreenWeb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      website: [
        {
          green: true,
          hostedBy: 'Test',
          hostedBywebsite: 'Website',
          url: 'testing.com',
        },
        {
          green: true,
          hostedBy: 'Facebook',
          hostedBywebsite: 'Website',
          url: 'facebook.com',
        },
        {
          green: true,
          hostedBy: 'Google',
          hostedBywebsite: 'Website',
          url: 'google.com',
        },
        {
          green: false,
          hostedBy: 'CoderFactoryAcademy',
          hostedBywebsite: 'Website',
          url: 'www.coderfactoryacademy.edu.au',
        },
        {
          green: false,
          hostedBy: 'Atlassian',
          hostedBywebsite: 'Website',
          url: 'atlassian.com',
        }
      ],
    }
  }

  checkWebsite = () => {
    const URL = `http://api.thegreenwebfoundation.org/greencheck/`;
    axios.get(URL + this.nameInput.value)
      .then((response) => {
        console.log(response.data);
        const websites = this.state.website;
        const saveData = {
          green: response.data.green,
          hostedBy: response.data.hostedby,
          hostedByWebsite: response.data.hostedbywebsite,
          url: response.data.url
        }
        this.setState({
          website: [...websites, saveData]
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="col s12 m3">
        <input type="text" ref={(input) => { this.nameInput = input; }} />
        <button onClick={() => { this.checkWebsite() }}>
          Get website
        </button>
        <ul className="collection">
          {this.state.website.map((data, index) =>
            <li className="collection-item" key={index}>{data.url} is&nbsp;
              {data.green ?
                <span className={'isGreen'}>green!</span>
                :
                <span className={'isNotGreen'}>not green!</span>
              }
            </li>
          )}
        </ul>
      </div>
    )
  }

}
