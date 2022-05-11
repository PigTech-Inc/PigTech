function calcular() {

    var qtdPorco = Number(inp_qtdPorco.value);
    var custoPorco = Number(inp_custoPorco.value);
    var valorPorco = Number(inp_valorPorco.value);
    var anos = Number(inp_anos.value);

    var income = (valorPorco * qtdPorco) * anos;

    var gastos = (qtdPorco * custoPorco) * anos;
    var lucro = (income - gastos);

    // 17% 100 - 17 = 83
    var gastosBetter = (gastos * 0.83);
    var lucroBetter = (income - gastosBetter);

    var difLucro = lucroBetter - lucro;
    var lucroPorcentagem = (difLucro * 100) / lucro;

    custoPorco = custoPorco.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });
    gastos = gastos.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });

    valorPorco = valorPorco.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });
    income = income.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });
    lucro = lucro.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });
    lucroBetter = lucroBetter.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });
    gastosBetter = gastosBetter.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });
    difLucro = difLucro.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    });
    lucroPorcentagem = lucroPorcentagem.toFixed(2);

    div_resultado.innerHTML =
        `
                    <div class='div_resu_inteiro'>

                        <p class='desc_resultado'>Com base em um custo de <u>${custoPorco}</u> para um porco atingir seu peso ideal de abate, um número de abates anuais de <u>${qtdPorco}</u> e um valor de venda do porco pós abate de 
                        <u>${valorPorco}</u> obterá os seguintes
                        resultados:</p>
                            <br>
                        <div class='semNos'>
                            <h3 class='valorVermelho'>Sem nosso serviço:</h3>
                            Gastos em ${anos} ano(s): ${gastos}<br>
                            Income em ${anos} ano(s): ${income}<br>
                            Lucro em ${anos} ano(s): ${lucro}<br>
                        </div>
    
                        <div class='comNos'>
                            <h3 class='valorVerde'>Com nosso serviço:</h3>
                            Gastos em ${anos} ano(s): ${gastosBetter}<br>
                            Income em ${anos} ano(s): ${income}<br>
                            Lucro em ${anos} ano(s): ${lucroBetter}<br>
                        </div>
                        <br>
                        <br>
                        <div class='aumento'>
                            Aumento de lucro em até:<br>
                            <b class='aumentoDif'>${difLucro}!</b><br>
                            ou<br>
                            <b class='aumentoDif'>${lucroPorcentagem}%!</b>
                        </div>
                        <div class='small'>
                            <i>
                                (OBS: Estes dados foram calculados considerando que a todo momento os porcos estejam em temperaturas inapropriadas sem nosso monitoramento.)
                            </i>
                        </div>
                            
                    </div>

                `
    div_resultado.style.padding = '8px';
}

/* ------------------------------------
                CHARTJS
----------------------------------------- */
const labels = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ];


  
  const data1 = {
    labels: labels,
    datasets: [{
      label: 'Variação de temperatura em ºC',
      backgroundColor: 'rgb(255, 85, 42)',
      borderColor: 'rgb(255, 85, 42)',
      data: [23.5, 24.4, 23.7, 24, 25.4, 26.7, 26.1, 28, 27.7],
    }]
  };
  const data2 = {
    labels: labels,
    datasets: [{
      label: 'Variação de temperatura em ºC',
      backgroundColor: 'rgb(255, 85, 42)',
      borderColor: 'rgb(255, 85, 42)',
      data: [24.3, 25, 24.8, 25, 26.8, 26.5, 28, 27.8, 29],
    }]
  };
  const data3 = {
    labels: labels,
    datasets: [{
      label: 'Variação de temperatura em ºC',
      backgroundColor: 'rgb(255, 85, 42)',
      borderColor: 'rgb(255, 85, 42)',
      data: [24, 24.7, 23.5, 25, 24.6, 26.8, 27.3, 28.2, 27.4],
    }]
  };

  const granja_01 = {
    type: 'line',
    data: data1,
    options: {}
  };
  const granja_02 = {
    type: 'line',
    data: data2,
    options: {}
  };
  const granja_03 = {
    type: 'line',
    data: data3,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    granja_01
  );

  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    granja_02
  );


  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    granja_03
  );