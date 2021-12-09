import React from 'react';

import styled from 'styled-components';

const Navbar = () => {
    return(
        <StyledNavbar id="navbar">
            <a href="/" id="navLogo">
                <p>GIPHYfun</p>
            </a>
        </StyledNavbar>
    )
}

export default Navbar;

const StyledNavbar = styled.div`
    display: flex;
    background-color: orange;
`