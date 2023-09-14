import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className='my-5'>
        <div className="card">
          <div style={{ display: 'flex', position: 'absolute', justifyContent: 'flex-end', right: '0' }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>

          </div>

          <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/apple-event-290842-16x9.jpg?VersionId=JfJej2H.6iccvEPTyKXs.rt7_4Lxcyr7" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on
              {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
