import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import JogoItem from '../components/JogoItem';
import api from '../services/api';

interface JogoParams {
	id: string;
}

function Jogo() {
	const params = useParams<JogoParams>();

	const [jogo, setJogo] = useState({
		jogo: '',
		jogador: '',
		url: '',
		comentario: '',
		id: '',
        data: '',
	});

	useEffect(() => {
		api.get(`jogatina/${params.id}`).then((response) => {
			setJogo(response.data);
		});
	}, [params]);

	console.log();
	return (
		<div>
			<Header pagina={jogo.jogo} />
            <JogoItem  url={jogo.url} jogador={jogo.jogador} data={jogo.data} jogo={jogo.jogo} />
		</div>
	);
}

export default Jogo;
