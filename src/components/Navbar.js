import React from 'react';

import styled from 'styled-components';

const Navbar = () => {
    return(
        <StyledNavbar id="navbar">
            <a href="/" id="navLogo">
                <img src="https://data4.origin.com/asset/content/dam/originx/web/app/games/dragon-age/dragon-age-origins/dragon-age-origins_gdp-logo-white.png/c5e6b3a5-1d58-4b37-98a7-1e74b579f582/original.png" alt="dragon age" />
                <p>CHARACTERS</p>
            </a>
        </StyledNavbar>
    )
}

export default Navbar;

const StyledNavbar = styled.div`
    display: flex;
    background-color: #460D0D;
    padding: 1rem;

    img {
        height: 4rem;

    }

    #navLogo {
        font-weight: bold;
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        &:hover {
            opacity: .85;
        }
        & p {
            margin-left: .5rem;
            text-shadow: 3px 3px 2.5px rgba(0, 0, 0, .7);
        }
    }
`