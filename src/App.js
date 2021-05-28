import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={ProductList} />
					<Route path='/Product/:productId' exact component={ProductDetails} />
					<Route>404 Not Found!</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
