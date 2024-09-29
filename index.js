const somaHorasExtras = (salario, valorHorasExtras) => {
  return salario - valorHorasExtras;
};

const esperado = 10;
const retorno = somaHorasExtras(5, 5);

if (esperado === retorno) {
  console.log('Teste passou');
} else {
  console.log('Deu ruim');
}
