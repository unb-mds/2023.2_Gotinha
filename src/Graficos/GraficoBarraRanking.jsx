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
                        width: 340,
                        height: 390,
                    },
                    title: {
                        style: {
                            fontSize: '15px',
                        },
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
        colors: ['#005B6E'], // define as cores das barras
        xaxis: {
            categories: ['Goiânia', 'Aparecida de Goiânia', 'Cidade Ocidental', 'Goianésia', 'Trindade'], // suas cidades
            labels: {
                show: false,
            },
            
        },
        yaxis: {
            labels: {
                formatter: (value) => { return value.toLocaleString('pt-BR'); },
                style: {
                    colors: '#EEF0F2', // define a cor do texto do eixo X
                    fontSize: '13px',
                },
            },
        }
    };

    const series = [
        {
            name: 'Valor investido(R$)',
            data: [	1100000000, 536000000, 282000000, 273000000, 269000000], // seus dados de classificação
        },
    ];

    return <Chart options={options} series={series} type="bar" height={400} width={600} />;
}

export default GraficoBarraRanking;