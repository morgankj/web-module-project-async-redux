import React from 'react';

import styled from 'styled-components';

const TrendingGifCard = ({character}) => {
    return (
        <StyledTrendingGifCard className="gifCard">
            <img src={character.photo} />
            <h3>{character.name}</h3>
        </StyledTrendingGifCard>
    )
};

export default TrendingGifCard;

const StyledTrendingGifCard = styled.div`
    width: 30%;
    height: 30vh;

    img {
        width: 100%;
        height: 100%;
    }
`