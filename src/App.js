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
    }
  }

componentDidMount(){
  this.getNews();
};

getNews() {
  const URL = 'http://www.reddit.com/r/green/hot.json'
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

  render() {
    return (
      <div className="App">
        <h2>Welcome to GreenScreen</h2>
        <div className="row">
          <GreenWeb />
          {/* <RedditNews getNews={() => this.getNews()}/> */}
          {this.state.reddit_news.length < 1 ? 'empty' : <RedditNews news={this.state.reddit_news} getIngredients={() => this.getNews()} />}
          <iframe className="col s12 m4"src='https://interactive.guim.co.uk/embed/aus/2017/carbon-embed' frameborder='0' scrolling='no' width='100%' height='500px'></iframe>
        </div>
        <iframe src="https://map.openchargemap.io/?mode=embedded" frameborder="0" height="600px" width="100%" >Map</iframe>
      </div>
    );
  }
}

export default App;
