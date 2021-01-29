import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blank from './pages/PaginaInicial';
//import Inicio from './pages/Inicio'
import Cat from './pages/Cat';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/cat'  component={Cat} />
                <Route path='/' exact component={Blank}/>

			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
