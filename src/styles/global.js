import { createGlobalStyle } from "styled-components";
import Grid from "./base/grid";

export default createGlobalStyle`
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
}
`;
