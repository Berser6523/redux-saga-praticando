import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap');	

*{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	outline: 0px;
}

html, body, #root{
	height: 100%;	
}

body{
	text-rendering: optimizeLegibility !important;
	-webkit-font-smoothing: antialiased !important;
	font-family: 'Montserrat', sans-serif;
	background-color: ${props => props.theme.colors.color01}
}
`;
