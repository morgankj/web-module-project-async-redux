import React from 'react';

import styled from 'styled-components';

const TrendingGifCard = ({gif}) => {
    return (
        <div className="gifCard">
            <img src={gif.embed_url} />
        </div>
    )
};

export default TrendingGifCard;

const StyledTrendingGifCard = styled.div`
    width: 30%;
`