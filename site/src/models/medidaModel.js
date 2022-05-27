var database = require("../database/config");

function buscarUltimasMedidas(idGranja, limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idGranja}
                    order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idGranja) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idGranja} 
                    order by id desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}