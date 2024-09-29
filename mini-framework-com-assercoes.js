const assert = require('assert');

const verifiqueQue = (valor) => {
  const assercoes = {
    exatamenteIgualA(esperado) {
      assert.strictEqual(valor, esperado);
    }
  };
  return assercoes;
}

const teste = (titulo, funcaoTeste) => {
  try {
    funcaoTeste(); 
    console.log(`${titulo} passou`);
  } catch (error) {
    console.log(`${titulo} Deu ruim \n ${error.message}`);
  }
}

const somaHorasExtras = (salario, valorHorasExtras) => {
  return salario + valorHorasExtras;
};

const calculaDesconto = (salario, descontos) => {
  return salario - descontos;
};

teste('soma', () => {
  const esperado = 11;
  const retornado = somaHorasExtras(5,5);

  verifiqueQue(retornado).exatamenteIgualA(esperado);
});

teste('desconto', () => {
  const esperado = 6;
  const retornado = calculaDesconto(10,5);

  verifiqueQue(retornado).exatamenteIgualA(esperado);
});