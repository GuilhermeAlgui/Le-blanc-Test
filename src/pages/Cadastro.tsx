import React, { useState, FormEvent } from 'react';
import Header from '../components/Header';
import JogoItem from '../components/JogoItem';
import '../styles/cadastro.css';

function Cadastro() {
	const [jogo, setJogo] = useState('');
	const [jogador, setJogador] = useState('');
	const [url, setUrl] = useState('');
	const [date, setDate] = useState('');

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		alert(`Jogo ${jogo} \n Jogador ${jogador} \n Url ${url} \n data ${date}`);
	}

	return (
		<div className='cadastro-body'>
			<Header pagina='Cadastro' />
			<div className='cadastro-container'>
				<JogoItem url={url} jogador={jogador} data={date} jogo={jogo} />
				<div className='cadastro-items'>
					<form onSubmit={handleSubmit} className='cadastro-form'>
						<h1>Cadastro</h1>

						<input
							type='text'
							name='Jogo'
							id=''
							value={jogo}
							placeholder='Jogo'
							onChange={(e) => {
								setJogo(e.target.value);
							}}
						/>
						<input
							type='text'
							name='Jogador'
							id=''
							placeholder='Jogador'
							value={jogador}
							onChange={(e) => {
								setJogador(e.target.value);
							}}
						/>
						<input
							type='url'
							name=''
							id=''
							placeholder='Url da imagem do jogo'
							value={url}
							onChange={(e) => {
								setUrl(e.target.value);
							}}
						/>
						<input
							type='date'
							name=''
							id=''
							onChange={(e) => {
								const d = e.target.valueAsDate;
								if (d) {
									setDate(d.toDateString());
								}
							}}
						/>
						<button type='submit'>Enviar</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Cadastro;
