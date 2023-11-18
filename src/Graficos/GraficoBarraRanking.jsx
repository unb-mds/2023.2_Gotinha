import React from 'react';
import Chart from 'react-apexcharts';

function GraficoBarraRanking() {
    const options = {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Ranking de cidades que mais investem', // define o título do gráfico
            align: 'center', // centraliza o título
            style: {
                fontSize: '20px', // define o tamanho da fonte
                color: '#EEF0F2', // define a cor do título
                fontWeight: 'bold',
              },
        },
        plotOptions: {
            bar: {
                horizontal: true, // torna o gráfico de barras horizontal
                borderRadius: 3, // define o raio das bordas das barras
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        colors: ['#0B475E'], // define as cores das barras
        xaxis: {
            categories: ['Cidade A', 'Cidade B', 'Cidade C', 'Cidade D', 'Cidade E'], // suas cidades
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
        }
    };

    const series = [
        {
            data: [400, 430, 448, 470, 540], // seus dados de classificação
        },
    ];

    return <Chart options={options} series={series} type="bar" height={400} width={600} />;
}

export default GraficoBarraRanking;