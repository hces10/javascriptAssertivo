const funcaoInterna = () => {
  console.log('data');
}

const falsoPositivo = () => {
  funcaoInterna();
  return 'teste';
}

module.exports = { falsoPositivo };
