import React, { useState, FormEvent } from 'react';
import Header from '../components/Header';
import JogoItem from '../components/JogoItem';
import api from '../services/api';
import {useHistory} from 'react-router-dom'
import '../styles/cadastro.css';

function Cadastro() {
	const history = useHistory()
	const [jogo, setJogo] = useState('');
	const [jogador, setJogador] = useState('');
	const [url, setUrl] = useState('');
	const [date, setDate] = useState('');
	const [comentario, setComentario] = useState('');
/*
	async function teste() {
		try {
			const response = await api.get('/jogatinas');
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
*/
	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const data = { jogo, jogador, url, data: date, comentario };

		console.log(data);

		try {
			const response = await api.post('/jogatinas',data);

		console.log(response.data);

		if(response.status===201){
			alert(`${jogo} foi inserido com sucesso`);
			history.push('/')
		}
		else{
		}

		} catch (error) {
			alert('Erro na inserção')

		}

		
		
	}

	return (
		<div className='cadastro-body'>
			<Header pagina='Cadastro' />
			<div className='cadastro-container'>
				<JogoItem  url={url} jogador={jogador} data={date} jogo={jogo} />
				<div className='cadastro-items'>
					<form onSubmit={handleSubmit} className='cadastro-form'>
						<h1>Cadastro</h1>

						<input
							type='text'
							required
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
							required
							id=''
							placeholder='Jogador'
							value={jogador}
							onChange={(e) => {
								setJogador(e.target.value);
							}}
						/>
						<input
							type='url'
							required
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
							required
							name=''
							id=''
							datatype=''
							onChange={(e) => {
								const d = e.target.valueAsDate;
								if (d) {
									setDate(d.toDateString());
								}
							}}
						/>
						<textarea
							value={comentario}
							required
							placeholder='Comentarios'
							onChange={(e) => {
								setComentario(e.target.value);
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
