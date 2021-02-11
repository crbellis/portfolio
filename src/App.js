import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact to="/" component={Home} />
				<Route to="/faq" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
