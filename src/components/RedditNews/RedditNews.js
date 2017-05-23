import React from 'react';
import css from './RedditNews.css';


class RedditNews extends React.Component {

  render () {
    return (
      <div className="col s12 m4 scroll">
        <ul className="collection with-header">
        <li className="collection-header"><h4>r/Green</h4></li>
          {this.props.news.filter(function(news_item) {
            return news_item.data.stickied == false
          })
            .map((news_item,i) => (
            <div className="collection-item reddit-item">
              <div className="row">
                <div className="col s1 score-text">
                  {news_item.data.score}
                </div>
                <div className="col s11">
                  <a href={`http://reddit.com/${news_item.data.permalink}`} target="_blank">{news_item.data.title}</a>
                  <br/>
                  <a href={`http://reddit.com/u/${news_item.data.author}`}>/u/{news_item.data.author}</a> |
                  <a href={`http://reddit.com/${news_item.data.permalink}`}> {news_item.data.num_comments} comments</a>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default RedditNews
