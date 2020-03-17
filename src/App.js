import React from "react";

// Redux
import { Provider } from "react-redux";

import Route from "./routes";
import store from "./store";
import GlobalStyled from "./styles/global";

export default () => {
	return (
		<Provider store={store}>
			<GlobalStyled />
			<Route />
		</Provider>
	);
};
