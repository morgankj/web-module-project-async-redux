import React from 'react';

import styled from 'styled-components';

const TrendingGifCard = ({character}) => {
    return (
        <StyledTrendingGifCard className="gifCard">
            <img src={character.photo} />
            <h3>{character.name}</h3>
            {character.appearances.length !== 0 ? <h4>Appearances: {character.appearances.map(appearance => <p className="appearanceListing" key={appearance} >{appearance}</p>)} </h4> : <p>Lore only</p> }
        </StyledTrendingGifCard>
    )
};

export default TrendingGifCard;

const StyledTrendingGifCard = styled.div`
    width: 28rem;
    margin: 1% auto;
    padding: 1%;
    background-image: url("https://img.freepik.com/free-photo/old-paper-texture-vintage-paper-background_262663-430.jpg?size=626&ext=jpg");
    background-size: cover;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(79, 15, 3, .8);

    img {
        width: 80%;
        border-radius: 5px;
    }

    h3 {
        font-size: 2.2rem;
    }
    h2, h3, h4 {
        font-weight: bold;
    }

    p {
        color: #781A1A;
    }

    .appearanceListing {
        font-weight: normal;
        text-align: left;
    }
`