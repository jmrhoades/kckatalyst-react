import React from "react";
import styled from 'styled-components';

function AspectBox({children, ratio = 9/16, ...props}) {
    return (
        <Outer ratio={ratio}>
            <Content>
                { children }
            </Content>
        </Outer>
    )
}

const Outer = styled.div`
    position: relative;
    overflow: hidden;   
    height: 0;
    padding-bottom: ${props => props.ratio * 100}%; 
`;

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.white};
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export default AspectBox;
