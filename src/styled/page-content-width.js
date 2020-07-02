import styled from 'styled-components';

export const PageContentPadding = styled.div`

    padding-left: 16px;
    padding-right: 16px;
    
    @media (min-width: 375px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    
    @media (min-width: 414px) {
        padding-left: 48px;
        padding-right: 48px;
    }
    
    @media (min-width: 640px) {
        padding-left: 56px;
        padding-right: 56px;
    }
    
    @media (min-width: 768px) {
        padding-left: 56px;
        padding-right: 56px;
    }

`;

export const PageContentWidth = styled(PageContentPadding)`
    max-width: 888px;
    margin: 0 auto;

`;

export const PageContentWidthWide = styled(PageContentWidth)`
    max-width: 1024px;  
`;

export const PageContentWidthExtraWide = styled(PageContentWidth)`
    max-width: 1440px;  
`;