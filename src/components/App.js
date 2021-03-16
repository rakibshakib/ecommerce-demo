import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { init, reducer } from '../store/store';
import Home from './Home/Home';
import ProductDetails from './Home/ProductDetails';

export const FoodDataContext = createContext();

const App = () => {
	const [state, dispatch] = useReducer(reducer, init);

	return (
		<FoodDataContext.Provider value={{ state, dispatch }}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>
					<Route path="/product/:id">
						<ProductDetails />
					</Route>
				</Switch>
			</BrowserRouter>
		</FoodDataContext.Provider>
	);
};

export default App;