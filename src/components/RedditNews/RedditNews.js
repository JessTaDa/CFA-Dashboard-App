import React from 'react';
import css from './RedditNews.css';


class RedditNews extends React.Component {

  render () {
    return (
      <div className="col s12 offset-4 m4 scroll">  
        <ul className="collection with-header">
        <li className="collection-header"><h4>r/Green</h4></li>
          {this.props.news.filter(function(news_item) {
            return news_item.data.stickied == false
          })
            .map((news_item,i) => (
            <li className="collection-item reddit-item" key={i}>
              <a href={`http://reddit.com/${news_item.data.permalink}`}>{news_item.data.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RedditNews
