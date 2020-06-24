import React from "react";
import styled from 'styled-components';

export const BookSellersContainer = styled.div`
    position: relative;
    text-align: center;
`;

export function BookSellersHeader({msg, ...props}) {
    return (
        <BookSellersH>
            {msg}
        </BookSellersH>
    )
}

export const BookSellersH = styled.p`
    padding-bottom: 1em;
`;

export function BookSellerLink({name, href, ...props}) {
    return (
        <Link>
         <Name href={href}>{name}</Name>
        </Link>
    )
}

export const Link = styled.div`
    padding-bottom: 1em;
`;


export const Name = styled.a`
    display: inline-block;
    position: relative;
    line-height: 1;
    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    border-bottom: 2px solid ${props => props.theme.colors.red};
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.colors.red};
    }
`;

export function BookSellerLinkArrow({name, href, ...props}) {
    return (
        <LinkArrow href={href}>
         <Name>{name}</Name>
         <Arrow viewBox="0 0 44 14">
             <path d="M36 1L42 7M42 7L36 13M42 7H0"/>
         </Arrow>
        </LinkArrow>
    )
}

export const LinkArrow = styled.a`
    display: inline-block;
    position: relative;
    line-height: 1;
    text-align: center;
    padding: 20px 100px 18px 20px;
   
    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    
    color: ${props => props.theme.colors.red};
    border: 2px solid ${props => props.theme.colors.red};

    &:hover{
        background-color: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.white};

        svg {
            stroke: ${props => props.theme.colors.white};
        }
    }
`;


export const Arrow = styled.svg`
    fill: none;
    width: 44px;
    height: 14px;
    stroke-width: 2px;
    stroke: ${props => props.theme.colors.red};
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);


`;