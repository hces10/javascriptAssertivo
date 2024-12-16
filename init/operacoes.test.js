const { calculaDesconto, somaHorasExtras } = require('./operacoes');

// describe('operacoes', () => {

//   beforeAll(() => {
//     console.log('beforeAll');
//   });

//   beforeEach(() => {
//     console.log('beforeEach');
//   });

//   afterAll(() => {
//     console.log('afterAll');
//   });

//   afterEach(() => {
//     console.log('afterEach');
//   });

//   it('deve somar hrs extras', () => {
//     const esperado = 10;
//     const retornado = somaHorasExtras(5, 5);

//     expect(retornado).toBe(esperado);
//   });

//   it.skip('deve calcular desconto', () => {
//     const esperado = 5;
//     const retornado = calculaDesconto(10, 5);

//     expect(retornado).toBe(esperado);
//   });
// });