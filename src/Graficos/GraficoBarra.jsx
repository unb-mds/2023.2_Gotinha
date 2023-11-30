import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

function GraficoBarra( { dados } ) {

    //console.log(dados);

    const options = {
        chart: {
            toolbar: {
                show: true, // esconde a barra de ferramentas
            },
        },
        plotOptions: {
            bar: {
                horizontal: false, // faz o gráfico de barras ser vertical
                borderRadius: 3, // define o raio das bordas das barras
            },
        },
        grid: {
            show: false,
        },
        colors: ['#0B475E'], // define as cores das barras
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], // define as categorias do eixo X
            labels: {
                style: {
                    colors: '#EEF0F2', // define a cor do texto do eixo X
                    fontSize: '13px',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#EEF0F2', // define a cor do texto do eixo X
                    fontSize: '13px',
                },
            },
        },
    };

    const series = [
        {
            name: 'Valor investido (R$)',
            data: dados, // seus dados de série
        },
    ];

    GraficoBarra.propTypes = {
        dados: PropTypes.array.isRequired, // ou o tipo de dados que você espera
    };

    return <Chart options={options} series={series} type="bar" height={300} width={850} />;
}

export default GraficoBarra;