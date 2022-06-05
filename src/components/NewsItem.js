import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
      let {title , description,imageURL,newsURL}=this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: 'auto'}}>
  <img src={imageURL?imageURL:"https://thumbs.dreamstime.com/b/news-network-mobile-device-89835976.jpg"} className="card-img-top" alt="..." style={{width: 'auto',height:'200px'}} />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsURL} className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
