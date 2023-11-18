import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Sobre.css';
import LogoGO from './assets/goImg.png';
import LogoGit from './assets/gitImg.png';
import LogoUNB from './assets/unbImg.png';


function Sobre() {
    return (
        <div className="sobre">
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
                <div className="itens-body-sobre">
                    <div className="conteudo1-sobre">
                        <h2>O que faz o projeto?</h2>
                        <p>A coleta e análise de informações em diários oficiais municipais desempenham um papel crucial na transparência e responsabilidade governamental.
                            Esses documentos contêm informações vitais sobre diversas atividades administrativas.</p>
                        <p>Dito isto, é importante ter uma ferramenta capaz de analisar esses dados e
                            transmiti-los de maneira clara e objetiva</p>
                        <p>O objetivo principal do projeto é coletar diários oficiais municipais de diferentes
                            municípios do estado do Goiás e analisar suas informações.</p>
                        <p> Além destes, todo o código produzido é aberto e distribuído de forma
                            livre no repositório: (inserirlink)</p>
                        <div className="possivel-img">possivel imagem!</div>
                    </div>
                    <div className="conteudo2-sobre">
                        <h2>Sobre nós</h2>
                        <p>Somos os integrantes do grupo 09 da disciplina de métodos de desenvolvimento de software que é ofertada
                            pela Universidade de Brasília e ministrada pela professor Carla Rocha.</p>
                        <h2>Equipe de Denvolvimento</h2>
                        <div className="box">
                            <div className="integrantes"></div>
                            <div className="integrantes"></div>
                            <div className="integrantes"></div>
                            <div className="integrantes"></div>
                            <div className="integrantes"></div>
                            <div className="integrantes"></div>
                            <div className="integrantes"></div>
                        </div>
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

export default Sobre;