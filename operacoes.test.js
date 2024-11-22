const { calculaDesconto, somaHorasExtras } = require('./operacoes');

describe('operacoes', () => {
  it('deve somar hrs extras', () => {
    const esperado = 10;
    const retornado = somaHorasExtras(5,5);

    expect(retornado).toBe(esperado);
  });

  it('deve calcular desconto', () => {
    const esperado = 5;
    const retornado = calculaDesconto(10,5);

    expect(retornado).toBe(esperado);
  });
});