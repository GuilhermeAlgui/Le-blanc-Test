import React from 'react';
import { useHistory } from 'react-router-dom';


function JogoItem(props: {
	iden?: number;
	url: string;
	jogo: string;
	jogador: string;
	data: string;
}) {
	const history = useHistory();
	const {iden, url, jogo, jogador, data } = props;
	const id = iden
	return (
		<div
			onClick={(e) => {
				if(id)
				history.push(`/jogo/${id}`)
			}}
			className='inicio-grid-item'>
			<img src={url} alt={jogo} />
			<div className='inicio-item-text'>
				<p className='inicio-item-jogo'>{jogo}</p>
				<p className='inicio-item-jogador'>{jogador}</p>
				<p className='inicio-item-data'>{data}</p>
			</div>
		</div>
	);
}

export default JogoItem