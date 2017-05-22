import React from 'react';


class RedditNews extends React.Component {

  render () {
    return (
      <ul>
        {this.props.news.filter(function(news_item) {
          return news_item.data.stickied == false
        })
          .map((news_item,i) => (
          <li key={i}>
            <a href={`http://reddit.com/${news_item.data.permalink}`}>{news_item.data.title}</a>
          </li>
        ))}
      </ul>
    )
  }
}

export default RedditNews
