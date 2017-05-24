import React, { Component } from 'react';
import './App.css';
import GreenWeb from './components/GreenWeb/GreenWeb';
import axios from 'axios';
import RedditNews from './components/RedditNews/RedditNews';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reddit_news: [],
      background: '',
    }
  }

  componentWillMount() {
    this.getPic();
  }


  componentDidMount(){
    this.getNews();
    this.getPic();
  };

  getNews() {
    const URL = 'https://www.reddit.com/r/green/hot.json'
    axios.get(URL)
    .then((response) => { //need to escape the context another option is to use bind
      this.setState({ reddit_news: response.data.data.children })
      console.log(response.data.data.children)
      // this.getRecipe(this.ingredientConcat());
    })
    .catch(function(error){
      console.log(error)
    });
  }

  getPic() {
    const URL = 'https://www.reddit.com/r/EarthPorn/top.json'
    axios.get(URL)
    .then((response) => {
      let random = Math.floor(Math.random() * response.data.data.children.length);
      console.log(random)
      console.log("afduakhdfjahdkahfhafasdfkafahlk")
      console.log(response.data.data.children[random].data.preview.images[0].source.url);
      let styles = response.data.data.children[random].data.preview.images[0].source.url;
      this.setState({ background: styles });
      console.log(this.state.background);
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App bg" style={{backgroundImage: `url(${this.state.background})`}}>
        <h2 className="text-bg">Ominous</h2>
        
        <Population />
        <div className="row">
          <GreenWeb />
          {/* <RedditNews getNews={() => this.getNews()}/> */}
          {this.state.reddit_news.length < 1 ? 'empty' : <RedditNews news={this.state.reddit_news} />}
          <iframe className="col s12 m5 scroll" src='https://interactive.guim.co.uk/embed/aus/2017/carbon-embed' frameborder='0' scrolling='yes' width='100%' height='550px' background-color='rgba(255, 255, 255, 0.55)'></iframe>
          <br/>
          <br/>
          <div className="map">
            <iframe className="col s12 map" src="https://map.openchargemap.io/?mode=embedded" frameborder="0" height="600px" width="100%" padding="30px">Map</iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
