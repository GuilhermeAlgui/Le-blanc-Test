import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import sortJsonarray from '../functions/sort';
import JogoItem from '../components/JogoItem';

import '../styles/inicio.css';
import api from '../services/api';

function Blank() {
	const [itemsList, setItemsList] = useState([]);

	useEffect(() => {
		api.get('jogatinas').then((response) => {
			const newItem = sortJsonarray(response.data);
			setItemsList(newItem);
		});
	}, []);

	return (
		<div className='inicio'>
			<Header pagina='Jogatinas Le Blanc' />

			<div className='inicio-grid'>
				{itemsList.map((item) => {
					const { url, jogador, jogo, data,id } = item;

					if (url && jogador && jogo && data)
						return (
							<JogoItem
								key={id}
								iden={id}
								url={url}
								jogador={jogador}
								jogo={jogo}
								data={data}
							/>
						);
					return null;
				})}
			</div>
		</div>
	);
}

export default Blank;
