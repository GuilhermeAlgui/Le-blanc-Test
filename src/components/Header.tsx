import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

interface Headerprops {
	pagina: string;
}

function Header({ pagina }: Headerprops) {
	function PageItem(props: { url: string; nome: string , id: string }) {
        const { url, nome,id } = props;
        
        if(pagina===id){
            return null

        }

		return (
			<Link className='header-item' to={`/${url}`}>
				{nome}
			</Link>
		);
	}

	return (
		<header className='header'>
			<h1>{pagina}</h1>

			<div className='header-links'>
				<PageItem url='' nome='Pagina inicial' id="Jogatinas Le Blanc" />
				<PageItem url='cat' nome='Gatos' id="Gatos" />
				<PageItem url='cadastro' nome='Cadastro'  id="Cadastro"/>
			</div>
		</header>
	);
}

export default Header;
