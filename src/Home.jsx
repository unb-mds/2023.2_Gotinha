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
                <Link to="/2023.2_Gotinha" className="logo">
                    <img src={LogoGO} alt="LogoGotinha" />
                </Link>
                <nav className="nav">
                    <ul>
                        <li><Link to="/2023.2_Gotinha" className="nav-button">Home</Link></li>
                        <li><Link to="/2023.2_Gotinha/Pesquisa" className="nav-button">Pesquisa</Link></li>
                        <li><Link to="/2023.2_Gotinha/Sobre" className="nav-button">Sobre</Link></li>
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
                        <Link to="/2023.2_Gotinha/Sobre" className="btn-sobre-projeto">
                            Saiba Mais
                        </Link>
                    </div>
                    <div className="conteudo2">
                        <div className="grafico">
                            <GraficoBarraRanking />
                        </div>
                        <Link to="/2023.2_Gotinha/Pesquisa" className="btn-buscar-cidades">
                            Buscar cidades
                        </Link>
                    </div>
                </div>

            </div>
            <div className="footer">
                <Link to="https://github.com/unb-mds/2023-2-Squad09-Gotinha" target="_blank">
                    <div className="logo1">
                        <img src={LogoGit} alt="LogoGitHub" className="logo-footer-git" />
                    </div>
                </Link>
                <p>Todos os direitos reservados</p>
                <div className="logo2">
                    <img src={LogoUNB} alt="LogoUNB" className="logo-footer-unb" />
                </div>
            </div>
        </div>
    );
}

export default Home;