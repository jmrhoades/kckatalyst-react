import React, { useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


function Menu({ open, setOpen, ...props }) {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
    
    function escapeKeyHandler(event) {
        if (event.keyCode === 27 && !isHidden) {
            setOpen(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('keydown', escapeKeyHandler);
        return () => {
            window.removeEventListener('keydown', escapeKeyHandler);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <MenuContainer open={open} aria-hidden={!isHidden} {...props}>
            <MenuOverlay onClick={() => setOpen(!open)} />
            <SiteNav aria-label="Site Navigation" open={open}>
                <SiteNavUL>
                    <SiteNavLI>
                        <SiteNavA to="/" tabIndex={tabIndex}>Home</SiteNavA>
                    </SiteNavLI>
                    <SiteNavLI>
                        <SiteNavA to="/about" tabIndex={tabIndex}>About</SiteNavA>
                    </SiteNavLI>
                    <SiteNavLI>
                        <SiteNavA to="/coaching" tabIndex={tabIndex}>Coaching</SiteNavA>
                    </SiteNavLI>
                    <SiteNavLI>
                        <SiteNavA to="/on-stage" tabIndex={tabIndex}>On Stage</SiteNavA>
                    </SiteNavLI>
                    <SiteNavLI>
                        <SiteNavA to="/books" tabIndex={tabIndex}>Books</SiteNavA>
                    </SiteNavLI>
                </SiteNavUL>
            

            <SocialNavUL>
                <SocialNavLI>
                    <SocialNavA href="https://twitter.com/kckatalyst">
                        <SocialNavSVG viewBox="0 0 32 32">
                            <g clipPath="url(#clip0)">
                                <path d="M31.9387 6.09201C30.7587 6.61067 29.4987 6.96401 28.172 7.12534C29.524 6.31067 30.564 5.02667 31.056 3.49467C29.788 4.23467 28.3827 4.77334 26.8867 5.07334C25.692 3.79467 23.9893 2.99467 22.0987 2.99467C18.476 2.99467 15.5387 5.93201 15.5387 9.55067C15.5387 10.0707 15.5987 10.5707 15.708 11.0493C10.2547 10.792 5.42133 8.17334 2.18667 4.21467C1.61733 5.17734 1.29867 6.29601 1.29867 7.51468C1.29867 9.79467 2.45867 11.7987 4.216 12.976C3.14 12.9413 2.128 12.6453 1.24533 12.1547V12.236C1.24533 15.416 3.50267 18.068 6.50667 18.672C5.956 18.82 5.37467 18.9 4.77867 18.9C4.36 18.9 3.95867 18.86 3.55733 18.7853C4.39867 21.3893 6.81733 23.288 9.696 23.3413C7.456 25.1 4.61733 26.148 1.56 26.148C1.04 26.148 0.521333 26.1173 0 26.0587C2.91867 27.9173 6.35733 29.004 10.076 29.004C22.148 29.004 28.7413 19.0093 28.7413 10.356C28.7413 10.0773 28.7413 9.79601 28.7213 9.51601C30.0027 8.59734 31.1213 7.43601 32.0013 6.11867L31.9387 6.09201Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="32" height="32" />
                                </clipPath>
                            </defs>
                        </SocialNavSVG>
                    </SocialNavA>
                </SocialNavLI>
                <SocialNavLI>
                    <SocialNavA href="https://instagram.com/kckatalyst">
                        <SocialNavSVG viewBox="0 0 32 32">
                            <g clipPath="url(#clip0)">
                                <path d="M16.0001 0C11.6534 0 11.1108 0.02 9.40409 0.096C7.70009 0.176 6.54009 0.444 5.52009 0.84C4.46809 1.248 3.57476 1.796 2.68542 2.68533C1.79609 3.57467 1.24676 4.46667 0.840092 5.52C0.444092 6.54 0.174758 7.7 0.0960916 9.404C0.0160916 11.1107 9.15527e-05 11.6533 9.15527e-05 16C9.15527e-05 20.3467 0.0200915 20.8893 0.0960916 22.596C0.176092 24.2987 0.444092 25.46 0.840092 26.48C1.24809 27.5307 1.79609 28.4253 2.68542 29.3147C3.57476 30.2027 4.46676 30.7533 5.52009 31.16C6.54142 31.5547 7.70143 31.8253 9.40409 31.904C11.1108 31.984 11.6534 32 16.0001 32C20.3468 32 20.8894 31.98 22.5961 31.904C24.2988 31.824 25.4601 31.5547 26.4801 31.16C27.5308 30.752 28.4254 30.2027 29.3148 29.3147C30.2028 28.4253 30.7534 27.5347 31.1601 26.48C31.5548 25.46 31.8254 24.2987 31.9041 22.596C31.9841 20.8893 32.0001 20.3467 32.0001 16C32.0001 11.6533 31.9801 11.1107 31.9041 9.404C31.8241 7.70133 31.5548 6.53867 31.1601 5.52C30.7521 4.468 30.2028 3.57467 29.3148 2.68533C28.4254 1.796 27.5348 1.24667 26.4801 0.84C25.4601 0.444 24.2988 0.174667 22.5961 0.096C20.8894 0.016 20.3468 0 16.0001 0ZM16.0001 2.88C20.2708 2.88 20.7801 2.90133 22.4668 2.97467C24.0268 3.048 24.8734 3.30667 25.4361 3.528C26.1854 3.81733 26.7161 4.164 27.2788 4.72267C27.8374 5.28267 28.1841 5.81467 28.4734 6.564C28.6921 7.12667 28.9534 7.97333 29.0241 9.53333C29.1001 11.2213 29.1174 11.728 29.1174 16C29.1174 20.272 29.0974 20.78 29.0188 22.4667C28.9374 24.0267 28.6774 24.8733 28.4574 25.436C28.1588 26.1853 27.8188 26.716 27.2588 27.2787C26.7001 27.8373 26.1601 28.184 25.4188 28.4733C24.8588 28.692 23.9988 28.9533 22.4388 29.024C20.7401 29.1 20.2401 29.1173 15.9601 29.1173C11.6788 29.1173 11.1788 29.0973 9.48143 29.0187C7.92009 28.9373 7.06009 28.6773 6.50009 28.4573C5.74143 28.1587 5.22009 27.8187 4.66143 27.2587C4.10009 26.7 3.74143 26.16 3.46142 25.4187C3.24142 24.8587 2.98276 23.9987 2.90143 22.4387C2.84143 20.7587 2.82009 20.24 2.82009 15.98C2.82009 11.7187 2.84143 11.1987 2.90143 9.49867C2.98276 7.93867 3.24142 7.08 3.46142 6.52C3.74143 5.76 4.10009 5.24 4.66143 4.67867C5.22009 4.12 5.74143 3.76 6.50009 3.48133C7.06009 3.26 7.90143 3 9.46143 2.92C11.1614 2.86 11.6614 2.84 15.9401 2.84L16.0001 2.88ZM16.0001 7.784C11.4601 7.784 7.78409 11.464 7.78409 16C7.78409 20.54 11.4641 24.216 16.0001 24.216C20.5401 24.216 24.2161 20.536 24.2161 16C24.2161 11.46 20.5361 7.784 16.0001 7.784ZM16.0001 21.3333C13.0534 21.3333 10.6668 18.9467 10.6668 16C10.6668 13.0533 13.0534 10.6667 16.0001 10.6667C18.9468 10.6667 21.3334 13.0533 21.3334 16C21.3334 18.9467 18.9468 21.3333 16.0001 21.3333ZM26.4614 7.46C26.4614 8.52 25.6001 9.38 24.5414 9.38C23.4814 9.38 22.6214 8.51867 22.6214 7.46C22.6214 6.40133 23.4828 5.54133 24.5414 5.54133C25.5988 5.54 26.4614 6.40133 26.4614 7.46Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="32" height="32" />
                                </clipPath>
                            </defs>
                        </SocialNavSVG>
                    </SocialNavA>
                </SocialNavLI>
                <SocialNavLI>
                    <SocialNavA href="https://www.linkedin.com/in/kevincarrollkatalyst/">
                        <SocialNavSVG viewBox="0 0 32 32">
                            <path d="M27.2627 27.2693H22.524V19.844C22.524 18.0733 22.488 15.7947 20.0547 15.7947C17.584 15.7947 17.2067 17.7213 17.2067 19.7133V27.2693H12.468V12H17.02V14.0813H17.0813C17.7173 12.8813 19.264 11.6147 21.5747 11.6147C26.376 11.6147 27.264 14.7747 27.264 18.888V27.2693H27.2627ZM7.116 9.91067C5.59067 9.91067 4.36533 8.676 4.36533 7.15733C4.36533 5.64 5.592 4.40667 7.116 4.40667C8.636 4.40667 9.868 5.64 9.868 7.15733C9.868 8.676 8.63467 9.91067 7.116 9.91067ZM9.492 27.2693H4.74V12H9.492V27.2693ZM29.6333 0H2.36133C1.056 0 0 1.032 0 2.30533V29.6947C0 30.9693 1.056 32 2.36133 32H29.6293C30.9333 32 32 30.9693 32 29.6947V2.30533C32 1.032 30.9333 0 29.6293 0H29.6333Z" />
                        </SocialNavSVG>

                    </SocialNavA>
                </SocialNavLI>
            </SocialNavUL>
            </SiteNav>
        </MenuContainer>
    )
}

export default Menu;

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    pointer-events: ${props => props.open ? "auto" : "none"};
`;

const MenuOverlay = styled.div`    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;        
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
`;

const SiteNav = styled.nav`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 375px;
    height: 100%;
    background-color: ${props => props.theme.colors.red};
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(${props => props.open ? "0" : "100%"});
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
`;

const SiteNavUL = styled.ul`
    margin-top: -100px;
`;

const SiteNavLI = styled.li`
    
`;

const SiteNavA = styled(Link)`
    font-size: 40px;
    display: block;
    text-align: center;
    line-height: 2.2;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.body};
`;

const SocialNavUL = styled.ul`
    position: absolute;
    bottom: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const SocialNavLI = styled.li`
    line-height: 1;
    width: 72px;
    height: 72px;
    
    &:nth-child(1) {
        margin-right: 16px;
    }

    &:nth-child(2) {
        margin-right: 16px;
    }
`;

const SocialNavA = styled.a`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;

`;

const SocialNavSVG = styled.svg`
    position: absolute;
    width: 32px;
    height: 32px;
    top: 20px;
    left: 20px;
    
    path {
        fill: ${props => props.theme.colors.white};
    }

    rect {
        fill: ${props => props.theme.colors.white};
    }
`;
