import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blank from './pages/PaginaInicial';
//import Inicio from './pages/Inicio'
import Cat from './pages/Cat';
import Cadastro from './pages/Cadastro';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/cat' component={Cat} />
				<Route path='/cadastro' component={Cadastro} />
				<Route path='/' exact component={Blank} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
