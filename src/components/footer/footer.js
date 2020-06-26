import React from "react";
import styled from 'styled-components';
import { BackNextNav } from "./back-next-nav";
import { SiteIndex } from "./site-index";
import { PageContentPadding } from "../../styled/page-content-width";

export function Footer() {
    return (
        <Foot>
            <BackNextNav />
            <PageContentPadding>
                <SiteIndex />
            </PageContentPadding>
        </Foot>
    )
}

const Foot = styled.footer`

`;



