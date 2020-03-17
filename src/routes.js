import React from "react";
import Main from "./pages/main";

import { BrowserRouter, Route } from "react-router-dom";

const Router = () => (
	<BrowserRouter>
		<Route exact path="/" component={Main} />
	</BrowserRouter>
);

export default Router;
