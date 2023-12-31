import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import GraficoBarra from './Graficos/GraficoBarra';
import GraficoRosquinha from "./Graficos/GraficoRosquinha";
import './Pesquisa.css';
import LogoGO from './assets/goImg.png';
import LogoGit from './assets/gitImg.png';
import LogoUNB from './assets/unbImg.png';


function Pesquisa() {
    const [cidades, setCidades] = useState([]); // Inicialize o estado com as cidades
    const [ano, setAnos] = useState([]); // Inicialize o estado com o ano
    const [cidadeSelecionada, setCidadeSelecionada] = useState("Goiânia");
    const [anoSelecionado, setAnoSelecionado] = useState("2023");
    const [dadosGrafico, setDadosGrafico] = useState([]);

    useEffect(() => {
        const urls = [
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/alexania.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/anapolis.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/aparecidagoiania.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/arenopolis.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/cidadeocidental.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/cocalzinhodegoias.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/goianesia.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/goiania.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/inhumas.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/ipora.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/itaberai.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/jaragua.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/luziania.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/montesclarosdegoias.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/palestinadegoias.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/planaltina.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/rioverde.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/trindade.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/uruacu.json',
            'https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/valparaisodegoias.json',
            // adicione mais URLs conforme necessário
        ];


        Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        )).then(data => {
            let cidades = [];
            let anos = [];

            data.forEach((dado) => {
                if (!cidades.includes(dado.nome)) {
                    cidades.push(dado.nome);
                }

                Object.keys(dado.detalhe).forEach(ano => {
                    if (!anos.includes(ano)) {
                        anos.push(ano);
                    }
                });
            });

            setCidades(cidades);
            setAnos(anos);
        });
    }, []);

    const cidadeUrlMap = {
        'Alexânia': 'alexania',
        'Anápolis': 'anapolis',
        'Aparecida de Goiânia': 'aparecidagoiania',
        'Arenópolis': 'arenopolis',
        'Cidade Ocidental': 'cidadeocidental',
        'Cocalzinho de Goiás': 'cocalzinhodegoias',
        'Goiânia': 'goiania',
        'Goianésia': 'goianesia',
        'Inhumas': 'inhumas',
        'Iporá': 'ipora',
        'Itaberaí': 'itaberai',
        'Jaraguá': 'jaragua',
        'Luziânia': 'luziania',
        'Montes Claros de Goiás': 'montesclarosdegoias',
        'Palestina de Goiás': 'palestinadegoias',
        'Planaltina': 'planaltina',
        'Rio Verde': 'rioverde',
        'Trindade': 'trindade',
        'Uruaçu': 'uruacu',
        'Valparaíso de Goiás': 'valparaisodegoias',
        // adicione mais mapeamentos conforme necessário
    };

    useEffect(() => {
        if (cidadeSelecionada && anoSelecionado) {
            // Buscar dados do JSON correspondente
            const cidadeUrl = cidadeUrlMap[cidadeSelecionada];
            const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad09-Gotinha/main/JSON/${cidadeUrl}.json`;
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Atualizar os dados do gráfico
                    const dadosAno = data.detalhe[anoSelecionado][anoSelecionado];
                    const dadosGrafico = Object.keys(dadosAno).map(mes => dadosAno[mes].valores_gastos);
                    console.log(dadosGrafico);
                    setDadosGrafico(dadosGrafico);
                });
        }
    }, [cidadeSelecionada, anoSelecionado]);

    return (
        <div className="pesquisa">
            <div className="header-pesquisa">
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
            <div className="body-pesquisa">
                <div className="texto-pesquisa">
                    <h2>Faça sua pesquisa!</h2>
                    <p>Selecione uma cidade, um ano e confira quanto foi investido no setor da saúde!</p>
                    <p>Caso julgue necessário, baixe o gráfico com os dados da cidade desejada.</p>
                </div>
                <div className="item-selection">
                    <select className="select-cidade" value={cidadeSelecionada} onChange={e => setCidadeSelecionada(e.target.value)}>
                        <option value="">Selecione uma cidade do Goiás</option>
                        {cidades.map((cidade, index) => (
                            <option key={index} value={cidade}>{cidade}</option>
                        ))}
                    </select>
                    <select className="select-ano" value={anoSelecionado} onChange={e => setAnoSelecionado(e.target.value)}>
                        <option value="">Selecione um ano</option>
                        {ano.map((ano, index) => (
                            <option key={index} value={ano}>{ano}</option>
                        ))}
                    </select>
                </div>
                <div className="graficos-pesquisa">
                    <div className="grafico1-pesquisa">
                        <GraficoBarra dados={dadosGrafico} />
                    </div>
                    <div className="grafico2-pesquisa">
                        <GraficoRosquinha dados={dadosGrafico} />
                    </div>
                </div>
            </div>
            <div className="footer-pesquisa">
                <Link to="https://github.com/unb-mds/2023-2-Squad09-Gotinha" target="_blank">
                    <div className="logo1-pesquisa">
                        <img src={LogoGit} alt="LogoGitHub" className="logo-footer-git" />
                    </div>
                </Link>
                <div className="logo2-pesquisa">
                    <img src={LogoUNB} alt="LogoUNB" className="logo-footer-unb" />
                </div>
            </div>
        </div>
    );
}

export default Pesquisa;