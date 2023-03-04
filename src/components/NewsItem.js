import React from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return (
        <div className="m-3">
            <div className="card" >
                <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'0'}}>
                    <span className="badge rounded-pill bg-danger">{ source }</span>
                </div>

                <img src={!imageUrl ? "https://moz.com/images/cms/6042b901d424f8.96940036_2021-04-15-230656.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1618528016&s=b298c4d810e8e8ad23b1fc18e845f64e":imageUrl } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text"><small className="text-muted">By { !author? "Unknown":author } on { new Date(date).toGMTString() }</small></p>
                    <a href={ newsUrl } target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
