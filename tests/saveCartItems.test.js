const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado
  it('Test if when executing saveCartItems with the "<ol><li>Item</li></ol>" argument, the localStorage.setItem method is called', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  // Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para saveCartItems
  it('Test if the localStorage.setItem method is called with two parameters: "cartItems", value passed as an argument to savedCartItems', () => {
    const argument = '<ol><li>Item</li></ol>';
    saveCartItems(argument);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(argument));
  });
  // fail('Teste vazio');
});
