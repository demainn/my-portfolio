import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	}
	body {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 16px;
	}
	*, *::before, *::after {
		box-sizing: border-box;
		transition-property: background-color, color, border-color;
		transition-duration: 0.3s;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`;

export default GlobalStyle;
