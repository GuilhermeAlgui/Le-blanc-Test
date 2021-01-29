import React from 'react';
import logo from '../assets/cat.png';
import Header from '../components/Header';
import '../styles/cat.css';

/*<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>*/

function Cat() {
	return (
		<div className='App'>
			<Header pagina="Gatos"/>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default Cat;
