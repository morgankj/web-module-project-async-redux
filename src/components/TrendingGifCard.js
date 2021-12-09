import React from 'react';

import styled from 'styled-components';

const TrendingGifCard = ({character}) => {
    return (
        <StyledTrendingGifCard className="gifCard">
            <img src={character.photo} />
            <h3>{character.name}</h3>
            <h4>Appearances: {character.appearances.map(appearance => <p className="appearanceListing" key={appearance} >{appearance}</p>)} </h4>
        </StyledTrendingGifCard>
    )
};

export default TrendingGifCard;

const StyledTrendingGifCard = styled.div`
    width: 28rem;
    margin: 1% auto;
    padding: 1%;
    background-color: pink;
    border-radius: 5px;

    img {
        width: 80%;
        border-radius: 5px;
    }

    h3, h4 {
        font-weight: bold;
    }

    h3 {
        font-size: 2.2rem;
    }

    .appearanceListing {
        font-weight: normal;
        text-align: left;
    }
`