import React, { Component } from 'react'

export  class NewsItem extends Component {
  render() {
      let {title, description ,imageUrl, newsUrl} = this.props
    return (
      <div>
          <div  className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/07/22/600x338/PM-Modi-_1690006914431_1690006914681.jpg":imageUrl}   className="card-img-top" alt="..."/>
            <div  className="card-body">
                <h5  className="card-title">{title}....</h5>
                <p  className="card-text">{description}...</p>
                <a href= {newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
</div>

      </div>
    )
  }
}

export default NewsItem