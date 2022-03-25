require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // Você deve implementar os 5 requisitos, independente do que for suficiente para a cobertura de testes.
  // Teste se fetchProducts é uma função;
  it('Test if "fetchProducts" is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  // Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;
  it('Test if the fetch function was called', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  // Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";
  // Consegui fazer graças ao conteúdo da aula ao vivo com Caique no dia 9.3 se ñ me engano
  it('Test if when calling the fetchProducts function with the "computer" argument, the fetch function uses the endpoint: "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const searchValue = 'computador';
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`;
    await fetchProducts(searchValue);
    expect(fetch).toHaveBeenCalledWith(url);
  });
  // Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.
  it('Test if the fetchProducts function return with the "computer" argument is data structure equal to the computerSearch object', async () => {
    const response = await fetchProducts('computador');
    expect(response).toMatchObject(computadorSearch);
  });
  // Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.
  it('Test if calling the fetchProducts function without an argument, it returns an error with the message: "You must provide an url', async () => {
    // Lembra como faz para capturar um erro? try/catch
    try {
      // Precisa chamar a função sem parâmetro, lembre-se que ela é assíncrona
      await fetchProducts();
    } catch (error) {
      // Capturando o erro no expect
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
  // fail('Teste vazio');
});
