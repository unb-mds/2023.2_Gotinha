import React from 'react';
import Chart from 'react-apexcharts';

function GraficoRosquinha() {
  const options = {
    chart: {
      toolbar: {
        show: true, // mostra a barra de ferramentas
      },
    },
    title: {
      text: 'Percentual investido em cada mês', // define o título do gráfico
      align: 'center', // centraliza o título
      style: {
        fontSize: '20px', // define o tamanho da fonte
        color: '#EEF0F2', // define a cor do título
      },
    },
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    plotOptions: {
      pie: {
        donut: {
          size: '60%', // define o tamanho do buraco no meio do gráfico
        },
      },
    },
    stroke: {
      show: false, // remove a borda do gráfico
    },
    colors: ['#0B475E', '#156D8A'], // define as cores das fatias
    legend: {
      position: 'bottom', // define a posição da legenda
    },
  };

  const series = [330, 410, 445, 900, 324, 434, 792, 2222, 154, 2343, 1123, 4444]; // seus dados de série

  return <Chart options={options} series={series} type="donut" width={430} />;
}

export default GraficoRosquinha;