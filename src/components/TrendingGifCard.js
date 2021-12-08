import React from 'react';

const TrendingGifCard = ({gif}) => {
    return (
        <div className="gifCard">
            <img src={gif.embed_url} />
        </div>
    )
};

export default TrendingGifCard;