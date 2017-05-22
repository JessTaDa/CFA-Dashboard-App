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
        <iframe src="https://map.openchargemap.io/?mode=embedded" frameborder="0" height="500px" width="800px" >Map</iframe>
        <GreenWeb />
          <h2>Welcome to GreenScreen</h2>
          {/* <RedditNews getNews={() => this.getNews()}/> */}
          {this.state.reddit_news.length < 1 ? 'empty' : <RedditNews news={this.state.reddit_news} getIngredients={() => this.getNews()} />}
      </div>
    );
  }
}

export default App;
