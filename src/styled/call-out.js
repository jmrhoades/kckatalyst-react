import styled from 'styled-components';

export const Callout = styled.div`
  font-size: ${props => props.theme.typography.scale6};
  color: ${props => props.theme.colors.red};
  text-align: center;
  max-width: 510px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
  em {
    font-size: 150%;
    line-height: 1;
  }
`;