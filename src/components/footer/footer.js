import React from "react";
import styled from 'styled-components';
import { BackNextNav } from "./back-next-nav";
import { SiteIndex } from "./site-index";

export function Footer() {
    return (
        <Foot>
            <BackNextNav />
            <SiteIndex />
        </Foot>
    )
}

const Foot = styled.footer`
    max-width: 1280px;
    margin: 0 auto;
`;
