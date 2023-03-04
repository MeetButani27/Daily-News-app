import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(true);

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsMonkey`;
        updateNews();
    })
    
    // const handlePrevClick = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1);
    //     updateNews();
    // }

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };



        return (
        <>
            <h2 className="text-center mb-4 mt-2">NewsMonkey - Top {capitalize(props.category)} Headlines</h2>
            
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength = {articles.length}
                next = {fetchMoreData}
                hasMore = {articles.length !== totalResults}
                loader = {<Spinner />}
            >
                
                <div className="container">
                    <div className="row">
                        {articles.map((element, idx) => {
                            return <div className="col-md-4" key={idx}>
                                <NewsItem title={element.title? element.title:""} description={element.description? element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            
            {/* <div className="container d-flex justify-content-between my-5">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page+1 > Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}

        </>
        )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string
}

export default News;