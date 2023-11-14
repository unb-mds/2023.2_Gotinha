import React, { useState, useEffect } from "react";
import './Pesquisa.css';
import LogoGO from './assets/goImg.png';
import LogoGit from './assets/gitImg.png';
import LogoUNB from './assets/unbImg.png';

function Pesquisa() {

    const [cidades, setCidades] = useState(["Cidade 1", "Cidade 2", "Cidade 3"]); // Inicialize o estado com as cidades
    const [ano, setAno] = useState([2023, 2022, 2021]); // Inicialize o estado com o ano
    const [mes, setMes] = useState(["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]); // Inicialize o estado com o mês

    return (
        <div className="pesquisa">
            <div className="header">
                <img src={LogoGO} alt="LogoGotinha" className="logo" />
                <nav className="nav">
                    <ul>
                        <li><a href="/" className="nav-button">Home</a></li>
                        <li><a href="/Pesquisa" className="nav-button">Pesquisa</a></li>
                        <li><a href="/Sobre" className="nav-button">Sobre</a></li>
                    </ul>
                </nav>
            </div>
            <div className="body">
                <div className="texto-pesquisa">
                    <h2>Faça sua pesquisa!</h2>
                    <p>Selecione uma cidade, um ano e um mês para gerar os gráficos!</p>
                    <p>Caso julgue necessário, pode baixar os arquivos em formato pdf do mês selecionado</p>
                </div>
                <div className="item-selection">
                    <select className="select-cidade">
                        <option value="">Selecione uma cidade do Goiás</option>
                        {cidades.map((cidade, index) => (
                            <option key={index} value={cidade}>{cidade}</option>
                        ))}
                    </select>
                    <select className="select-ano">
                        <option value="">Todos os anos</option>
                        {ano.map((ano, index) => (
                            <option key={index} value={ano}>{ano}</option>
                        ))}
                    </select>
                    <select className="select-mes">
                        <option value="">Todos os meses</option>
                        {mes.map((mes, index) => (
                            <option key={index} value={mes}>{mes}</option>
                        ))}
                    </select>
                </div>
                <div className="graficos-pesquisa">
                    <div className="grafico1-pesquisa">Gráfico 1!</div>
                    <div className="grafico2-pesquisa">Gráfico 2!</div>
                    <button className="btn-baixar-pdf">Baixar PDF's</button>
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

export default Pesquisa;