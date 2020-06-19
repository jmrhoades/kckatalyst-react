import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

body {
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.typography.size};
  line-height: ${props => props.theme.typography.lineHeight};
}

::selection {
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.red};
}

img {
  max-height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
    font-weight: normal;
    margin: 0;
    padding: 0;
}

h1 {
  font-size: ${props => props.theme.typography.scale1};
  line-height: 1.1;
}
h2 {
  font-size: ${props => props.theme.typography.scale2};
  line-height: 1.1;
}
h3 {
  font-size: ${props => props.theme.typography.scale3};
}
h4 {
  font-size: ${props => props.theme.typography.scale4};
}
h5 {
  font-size: ${props => props.theme.typography.scale5};
}
h6 {
  font-size: ${props => props.theme.typography.scale6};
}

ul,
li {
    list-style: none;
}

svg {
    display: block;
}

img,
video {
    display: block;
    width: 100%;
    height: auto;
}

a {
  color: ${props => props.theme.colors.red};
  font-family: ${props => props.theme.fonts.bodyItalic};
  font-weight: 400;
  text-decoration: none;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

button {
    display: block;
    margin: 0;
    padding: 0;
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
}

button:active,
button:focus {
    outline: none;
    box-shadow: none;
}

p {
  padding-bottom: 3em;
}

`