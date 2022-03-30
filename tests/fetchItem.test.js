require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // Teste se fetchItem é uma função
  it('Test if fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  // Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada
  it('Test if fetch was called when executing fetchItem function with argument "MLB1615760527"', async () => {
    const itemID = 'MLB1615760527';
    await fetchItem(itemID);
    expect(fetch).toHaveBeenCalled();
  });
  // Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
  it('Test if fecth uses the correct endpoint when calling fetchItem with argument "MLB1615760527"', async () => {
    const itemID = 'MLB1615760527';
    const url = `https://api.mercadolibre.com/items/${itemID}`;
    await fetchItem(itemID);
    expect(fetch).toHaveBeenCalledWith(url);
  });
  // Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.
  it('Test if the fetchItem function return with the argument "MLB1615760527" is equal to the item object', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  // Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.
  it('Test if when calling the fetchItem function without an argument, it returns an error with the message: "You must provide an url"', async () => {
    try {
      await fetchItem()
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
  // fail('Teste vazio');
});
