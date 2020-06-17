import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  
body {
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.typography.size};
  line-height: ${props => props.theme.typography.lineHeight};
}

a {
  color: ${props => props.theme.colors.red};
  font-family: ${props => props.theme.fonts.bodyItalic};
  font-weight: 400;
  text-decoration: none;
  outline: none;
}

img {
  max-height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
    padding: 0;
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

button {
    display: block;
    margin: 0;
    padding: 0;
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
}

button:active,
button:focus {
    outline: none;
    box-shadow: none;
}

`