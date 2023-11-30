import Chart from 'react-apexcharts';

function GraficoBarraRanking() {
    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        responsive: [
            {
                breakpoint: 730,
                options: {
                    chart: {
                        width: 390,
                        height: 390,
                    },
                },
            },
        ],
        title: {
            text: 'Ranking de cidades que mais investem', // define o título do gráfico
            align: 'center', // centraliza o título
            style: {
                fontSize: '18px', // define o tamanho da fonte
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
                show: false,
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
            data: [100, 200, 300, 400, 500], // seus dados de classificação
        },
    ];

    return <Chart options={options} series={series} type="bar" height={400} width={600} />;
}

export default GraficoBarraRanking;