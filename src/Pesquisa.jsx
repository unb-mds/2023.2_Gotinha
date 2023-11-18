import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import GraficoBarra from './Graficos/GraficoBarra';
import GraficoRosquinha from "./Graficos/GraficoRosquinha";
import './Pesquisa.css';
import LogoGO from './assets/goImg.png';
import LogoGit from './assets/gitImg.png';
import LogoUNB from './assets/unbImg.png';


function Pesquisa() {

    const [cidades, setCidades] = useState(["Cidade 1", "Cidade 2", "Cidade 3"]); // Inicialize o estado com as cidades
    const [ano, setAno] = useState([2023, 2022, 2021]); // Inicialize o estado com o ano

    return (
        <div className="pesquisa">
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
                <div className="texto-pesquisa">
                    <h2>Faça sua pesquisa!</h2>
                    <p>Selecione uma cidade, um ano e confira quanto foi investido no setor da saúde!</p>
                    <p>Caso julgue necessário, baixe o gráfico com os dados da cidade desejada.</p>
                </div>
                <div className="item-selection">
                    <select className="select-cidade">
                        <option value="">Selecione uma cidade do Goiás</option>
                        {cidades.map((cidade, index) => (
                            <option key={index} value={cidade}>{cidade}</option>
                        ))}
                    </select>
                    <select className="select-ano">
                        <option value="">Selecione um ano</option>
                        {ano.map((ano, index) => (
                            <option key={index} value={ano}>{ano}</option>
                        ))}
                    </select>
                </div>
                <div className="graficos-pesquisa">
                    <div className="grafico1-pesquisa">
                        <GraficoBarra/>
                    </div>
                    <div className="grafico2-pesquisa">
                        <GraficoRosquinha/>
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

export default Pesquisa;