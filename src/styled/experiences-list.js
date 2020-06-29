import styled from 'styled-components';

export const Experiences = styled.section`
  margin-bottom: 4em;
  li {
    margin-bottom: 1em;
  }
`;

export const ExperiencesTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.scale4};
  line-height: 1.1;
  margin-bottom: 0.333em;
  padding-bottom: 1em;
`;

export const ExperiencesLead = styled.h4`
  font-family: ${props => props.theme.fonts.bodyItalic};
  font-size: ${props => props.theme.typography.scale5};
  line-height: 1.333;
  padding-bottom: 3em;
`;

export const ExperienceTitle = styled.h5`
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.scale6};
  line-height: 1.333;
  margin-bottom: 0.5em;
  position: relative;
  &:before {
      content: "";
      width: 0.75em;
      height: 3px;
      background-color: ${props => props.theme.colors.black};
      display: block;
      position: absolute;
      left: -1.75em;
      top: 0.5em;
    }
`;