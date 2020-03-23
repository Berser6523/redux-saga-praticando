import React from "react";

// Redux
import { Provider } from "react-redux";

import Route from "./routes";
import store from "./store";
import GlobalStyled from "./styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/themes";

export default () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={Theme}>
				<GlobalStyled />
				<Route />
			</ThemeProvider>
		</Provider>
	);
};
