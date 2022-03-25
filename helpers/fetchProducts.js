// npm i node-fetch@^2
// const fetch = require('node-fetch');

const fetchProducts = async (searchValue) => {
  // Criar uma listagem de produtos. Como?
  // Implementando a função fetchProducts que deve consumir o endpoint: "https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
  // $QUERY deve ser o valor da sua busca. A busca deve ser obrigatoriamente o termo computador
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`;
  const products = await (await fetch(endpoint)).json();
  // A lista de produtos que devem ser exibidos é o array results no JSON computador.
  return products;
  // console.log(products.results);
};
// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
