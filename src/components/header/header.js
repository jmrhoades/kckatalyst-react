import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import HeaderLogo from "./header-logo";

function Header() {
    return (
        <Head>
            <Link to="/">
                <HeaderLogo />
            </Link>
        </Head>
    )
}

const Head = styled.header`
    height: 64px;
    position: fixed;
    background-color: ${props => props.theme.colors.white};
    width: 100%;
    z-index: 2;

    @media (min-width: 768px) {
        height: 88px;
    }
`;

export default Header;
