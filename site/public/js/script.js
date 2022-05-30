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
