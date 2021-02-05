import React, { useState } from 'react';
import Header from '../components/Header';
import sortJsonarray from '../functions/sort'
import JogoItem from '../components/JogoItem'

import '../styles/inicio.css';



function Blank() {

    
const items = [
	{
		url:
			'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/02/gorochu-pikachu-perdido-590x310.jpg',
		jogo: 'Pokémon',
		jogador: 'Protagonista',
		data: '22/02/2012',
	},
	{
		url:
			'https://pm1.narvii.com/7086/4c97c9c9c554ec2d7d94d04b430a2f3dc0335e50r1-2048-1208v2_uhq.jpg',
		jogo: 'Yu-Gi-Oh!',
		jogador: 'Duelista',
		data: '21/05/2015',
	},
	{
		url:
			'https://squared-potato.pt/wp-content/uploads/2020/04/Final-Fantasy-VII-cloud.jpg',
		jogo: 'Final Fantasy VII',
		jogador: 'Croud',
		data: '25/09/1999',
	},
	{
		url:
			'https://fanatical.imgix.net/product/original/a7adf222-0fab-4a7e-9d25-8a0c201c5acc.jpeg?auto=compress,format&w=400&fit=max',
		jogo: 'Digimon Story: CyberSleuth Complete Edition',
		jogador: 'Jalpykon',
		data: '25/09/2035',
	},
	{
		url:
			'https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324',
		jogo: 'Stardew Valley',
		jogador: 'Haru',
		data: '25/09/2125',
	},
	{
		url:
			'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_25/SI_3DS_FossilFightersFrontier_image1600w.png',
		jogo: 'Fossil Fighters',
		jogador: 'Jayden',
		data: '25/09/2020',
	},
	{url:'https://s2.glbimg.com/absTcKDlX83ZczDyaqrkW-5jhcg=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/n/e/t20YcFS0yQ5Bv5RDM0yw/001.jpg',

        jogo: 'Megaman',
    jogador: 'Shirobo',
    data: '25/09/2015',},
    
];


    const [itemsList,setItemsList] = useState(items)

    const [started,setStarted] = useState(false);


    function startThings(){
        const newItem = sortJsonarray(itemsList)
        setItemsList(newItem)
        setStarted(true)
    }

    if(!started){
         startThings()   
    }
	return (
		<div className='inicio'>
			<Header pagina='Jogatinas Le Blanc' />
            

			<div className='inicio-grid'>
				{itemsList.map((item) => {
					const { url, jogador, jogo, data } = item;

					if (url && jogador && jogo && data)
						return (
							<JogoItem
								key={url}
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
