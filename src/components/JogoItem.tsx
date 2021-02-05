import React from 'react';


function JogoItem(props: {
	url: string;
	jogo: string;
	jogador: string;
	data: string;
}) {
	const { url, jogo, jogador, data } = props;

	return (
		<div
			onClick={(e) => {
				const win = window.open(url, '_blank');
				if (win) win.focus();
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