import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
