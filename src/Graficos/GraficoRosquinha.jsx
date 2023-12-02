import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

function GraficoRosquinha({ dados }) {
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
          size: '40%', // define o tamanho do buraco no meio do gráfico
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
    responsive: [
      {
        breakpoint: 700,
        options: {
          chart: {
            width: 380,
            toolbar: {
              show: false,
            },
          },
          title: {
            style: {
              fontSize: '13px', // define o tamanho da fonte
            },
          },
          legend: {
            markers: {
              width: 10,
              height: 10,
            },
            itemMargin: {
              horizontal: 10,
              vertical: 2,
            },
          }
        },
      },
    ],
  };

  const series = dados; // seus dados de série
  return <Chart options={options} series={series} type="donut" width={430} />;
}

GraficoRosquinha.propTypes = {
  dados: PropTypes.array.isRequired, // ou o tipo de dados que você espera
};

export default GraficoRosquinha;