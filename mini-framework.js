const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} passou`);
  } else {
    console.log(`${titulo} Deu ruim`);
  }
}

const somaHorasExtras = (salario, valorHorasExtras) => {
  return salario + valorHorasExtras;
};

const calculaDesconto = (salario, descontos) => {
  return salario - descontos;
};

teste('soma', 10, somaHorasExtras(5,5));
teste('desconto', 5, calculaDesconto(10,5));