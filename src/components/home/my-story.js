import React from "react";
import { useState } from "react";
import styled from 'styled-components';


export function MyStory() {

    const [open, setOpen] = useState(false);
    const readMoreRef = React.useRef();

    const onReadMoreClick = event => {
        setOpen(true)
    }

    const onDoneClick = event => {
        setOpen(false)
        if (readMoreRef.current) {
            const rect = readMoreRef.current.getBoundingClientRect();
            //console.log(rect);
            //console.log(window.scrollY);
            window.scroll({
                top: (window.scrollY + rect.top) - (window.innerHeight/3),
            });
        }
    }

    return (
        <MyStoryOuter open={open}>
            <MyStoryInner>
                <Header>My Story</Header>
                <p>
                    They chose their addiction over raising three sons. The pinnacle moment of his 	parent’s neglect resulted in the three boys being “rescued” by a stranger, shuttled down to a greyhound bus station in Bowling Green, VA, placed on a bus alone (ages eight, six, and three) and sent on a 200+ mile, one-way fare to their grandparent’s house in Philadelphia.
                </p>
                <p>
                    Without parents in his life, Kevin resorted to finding life lessons from many sources: businessmen and laborers, winos and alcoholics, drug dealers and users, sport coaches, my peers and old-heads at the playground, merchants, war vets, school teachers, librarians, custodians, food service workers, other kid’s moms and dads.
                </p>
                <p>
                    Kevin learned to be constantly on the lookout for any nugget of insight/wisdom that would assist me on my quest to rise above my suffering and circumstances - turning ideas into reality became his focus + “I'll show YOU!” became his daily mantra. Carroll spent endless hours at the neighborhood playground, school & the public library - all of these locales became sanctuaries for him. Finding a way to rise above his
                    circumstances and not let his circumstances dictate his destiny was his constant motivation. Kevin found a way to transform his journey from abandonment, dysfunction and uncertainty to success and a lifelong pursuit of significance.
                </p>
                <p>
                    After serving in the Air Force for ten years and earning a college degree, Kevin became an athletic trainer at the high school and collegiate levels in Philadelphia. His expertise in sport performance was recognized by the 76ers organization and led to earning a dream job as the head athletic trainer for the Philadelphia 76ers in 1995. (Special Note: Carroll was the third African-American athletic trainer in the history of the NBA!) While at the 76ers an unexpected  “verbal altercation” was a catalyst to gain the attention of  Nike who offered him an opportunity to bring his unique + diverse experiences to the sneaker giant in 1997. Although no job "officially" existed at the time, Nike executives directed Kevin to create a position at the company that would add value to the overall mission of the brand. Carroll stayed for seven years as the "Katalyst" (the 'K' is for Kevin)—a creative change agent. At Nike he was instrumental in helping the company develop a deeper understanding of athletic product performance, team dynamics and interpersonal communication. Carroll left Nike in 2004 to create his own company, Kevin Carroll Katalyst, committed to elevating the power of sport and play around the world.
                    Kevin is the author of four highly successful books published by ESPN, Disney Press, McGraw-Hill and A Kids Book About. I’ve had the opportunity to help turn creative ideas into  reality for organizations such as Nike, Starbucks, adidas, Walt Disney, Target, Proctor & Gamble, Google, Columbia Sportswear, Mattel, the National Basketball Association and many others.
                </p>
                <DoneContainer>
                    <Done onClick={onDoneClick}>Close</Done>
                </DoneContainer>
            </MyStoryInner>
            <BottomCover open={open}>
                <Fade />
                <Solid />
                <ReadMore onClick={onReadMoreClick} ref={readMoreRef}>Read More</ReadMore>
            </BottomCover>
        </MyStoryOuter>
    )
}

const MyStoryOuter = styled.div`
    padding: 2.5em;
    padding-top: 2em;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 0.664142px 2.85027px rgba(0, 0, 0, 0.0196802), 0px 1.59602px 6.84961px rgba(0, 0, 0, 0.0282725), 0px 3.00517px 12.8972px rgba(0, 0, 0, 0.035), 0px 5.36071px 23.0064px rgba(0, 0, 0, 0.0417275);
    max-width: 544px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    margin-bottom: 5em;
    height: ${props => props.open ? "auto" : "500px"};

    @media (min-width: 960px) { 
        margin-top: -4em;
        margin-left: 30%;
    }
`;

const MyStoryInner = styled.div`
    font-family: ${props => props.theme.fonts.bodyItalic};
    font-weight: 400;
    font-size: 19px;
`;

const BottomCover = styled.div`
    position: absolute;
    height: 160px;
    top: calc(500px - 160px);
    left: 0;
    width: 100%;
    visibility: ${props => props.open ? "hidden" : "visible"};
`;

const Fade = styled.div`
    height: 80px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
`;

const Solid = styled.div`
    height: 80px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
`;

const Header = styled.h6`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.red};
    margin-bottom: 2em;
    margin-top: -1em;
    display: none;
`;

const ReadMore = styled.button`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    /* border-bottom: 2px solid ${props => props.theme.colors.red}; */
    box-shadow: inset 0 -2.5px 0 ${props => props.theme.colors.red};
    text-decoration: none;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`;

const DoneContainer = styled.div`
    height: 80px;
    position: relative;
`;

const Done = styled.button`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    /* border-bottom: 2px solid ${props => props.theme.colors.red}; */
    box-shadow: inset 0 -2.5px 0 ${props => props.theme.colors.red};
    text-decoration: none;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`;