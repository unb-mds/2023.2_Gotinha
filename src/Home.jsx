import React, { useState, useEffect } from "react";
import GraficoBarraRanking from './Graficos/GraficoBarraRanking';
import { Link } from 'react-router-dom';
import './Home.css';
import LogoGO from './assets/goImg.png';
import LogoGit from './assets/gitImg.png';
import LogoUNB from './assets/unbImg.png';

function Home() {
    return (
        <div className="home">
            <div className="header">
                <img src={LogoGO} alt="LogoGotinha" className="logo" />
                <nav className="nav">
                    <ul>
                        <li><Link to="/pagina-mds" className="nav-button">Home</Link></li>
                        <li><Link to="/pagina-mds/Pesquisa" className="nav-button">Pesquisa</Link></li>
                        <li><Link to="/pagina-mds/Sobre" className="nav-button">Sobre</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="body">
                <h1>Confira a relação de investimento na saúde do Goiás</h1>
                <div className="itens-body">
                    <div className="conteudo1">
                        <div className="sobre-projeto">
                            <h2>Confira o projeto</h2>
                            <p>Coletamos os diários oficiais municipais, separamos por municípios e analisamos a
                                relação de compra e distribuição de vacinas no estado do Goiás. Com foco em simplicidade e transparência,
                                queremos monitorar se o governo do Goiás está tendo o compromisso adequado no que tange a
                                área da saúde.</p>
                        </div>
                        <button className="btn-sobre-projeto">Saiba Mais</button>
                    </div>
                    <div className="conteudo2">
                        <div className="grafico">
                            <GraficoBarraRanking />
                        </div>
                        <button className="btn-buscar-cidades">Buscar cidades</button>
                    </div>
                </div>

            </div>
            <div className="footer">
                <div className="logo1">
                    <img src={LogoGit} alt="LogoGitHub" className="logo-footer-git" />
                </div>
                <p>Todos os direitos reservados</p>
                <div className="logo2">
                    <img src={LogoUNB} alt="LogoUNB" className="logo-footer-unb" />
                </div>
            </div>
        </div>
    );
}

export default Home;