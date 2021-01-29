import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

interface Headerprops{

    pagina: string,



}


function PageItem(props:{url: string, nome: string}){


    const {url, nome} = props


    return(
            <Link className= "header-item" to={`/${url}`}>{nome}</Link>



    )



}




function Header({pagina}:Headerprops){


    return(
        <header className="header">

            <h1>{pagina}</h1>

            <div className="header-links">
                <PageItem url='' nome='Pagina inicial' />
                <PageItem url='cat' nome='Cat' />
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                

            </div>









        </header>
    )

}

export default Header;