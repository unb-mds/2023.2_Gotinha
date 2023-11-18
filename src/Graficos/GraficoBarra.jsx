import React from 'react';
import Chart from 'react-apexcharts';

function GraficoBarra() {
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
            data: [330, 410, 445, 900, 324, 434, 792, 2222, 154, 2343, 1123, 4444], // seus dados de série
        },
    ];

    return <Chart options={options} series={series} type="bar" height={300} width={850} />;
}

export default GraficoBarra;