import { Link } from 'react-router-dom';
import './Sobre.css';
import LogoGO from './assets/goImg.png';
import LogoGit from './assets/gitImg.png';
import LogoUNB from './assets/unbImg.png';


function Sobre() {
    return (
        <div className="sobre">
            <div className="header-sobre">
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
            <div className="body-sobre">
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
                            livre no repositório <a href="https://github.com/unb-mds/2023-2-Squad09-Gotinha" target="_blank" rel="noopener noreferrer">gotinha/extrator</a></p>
                        <div className="possivel-img">possivel imagem!</div>
                    </div>
                    <div className="conteudo2-sobre">
                        <h2>Sobre nós</h2>
                        <p>Somos os integrantes do grupo 09 da disciplina de métodos de desenvolvimento de software que é ofertada
                            pela Universidade de Brasília e ministrada pela professor Carla Rocha.</p>
                        <h2>Equipe de Denvolvimento</h2>
                        <div className="box">
                            <Link to="https://github.com/joao-artl" target="_blank" className="integrantes1">
                                <img src="https://avatars.githubusercontent.com/u/124414056?v=4" alt="dev" className="integrantes" />
                            </Link>
                            <Link to="https://github.com/LuizGust4vo" target="_blank" className="integrantes1">
                                <img src="https://avatars.githubusercontent.com/u/62315709?v=4" alt="dev" className="integrantes" />
                            </Link>
                            <Link to="https://github.com/yanzin00" target="_blank" className="integrantes1">
                                <img src="https://avatars.githubusercontent.com/u/118907920?v=4" alt="dev" className="integrantes" />
                            </Link>
                            <Link to="https://github.com/Mxrcio" target="_blank" className="integrantes1">
                                <img src="https://avatars.githubusercontent.com/u/82161026?v=4" alt="dev" className="integrantes" />
                            </Link>
                            <Link to="https://github.com/paulomh" target="_blank" className="integrantes1">
                                <img src="https://avatars.githubusercontent.com/u/129633592?v=4" alt="dev" className="integrantes" />
                            </Link>
                            <Link to="https://github.com/DudaV228" target="_blank" className="integrantes1">
                                <img src="https://avatars.githubusercontent.com/u/110543736?v=4" alt="dev" className="integrantes" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-sobre">
                <Link to="https://github.com/unb-mds/2023-2-Squad09-Gotinha" target="_blank">
                    <div className="logo1-sobre">
                        <img src={LogoGit} alt="LogoGitHub" className="logo-footer-git" />
                    </div>
                </Link>
                <p>Todos os direitos reservados</p>
                <div className="logo2-sobre">
                    <img src={LogoUNB} alt="LogoUNB" className="logo-footer-unb" />
                </div>
            </div>
        </div>
    );
}

export default Sobre;