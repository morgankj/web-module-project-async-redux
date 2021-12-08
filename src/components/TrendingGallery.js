import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTrendingGifs } from '../actions';
import TrendingGifCard from './TrendingGifCard';

const TrendingGallery = (props) => {
    const { trendingGifs, isFetching, error } = props;
    
    useEffect(() => {
        props.getTrendingGifs();
    }, [])

    if (error) {
        return (
            <h2>The gallery could not load to the error: {error}</h2>
        )
    }

    if (isFetching) {
        return (
            <h2>Loading gallery...</h2>
        )
    }

    return (
        <div id="galleryContainer" >
            {trendingGifs.map(gif => <TrendingGifCard gif={gif} key={gif.id} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        trendingGifs: state.trendingGifs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getTrendingGifs })(TrendingGallery);