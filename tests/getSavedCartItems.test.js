const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado
  it('Test if when running getSavedCartItems function, the localStorage.getItem method is called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  // Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o 'cartItems' como parâmetro
  it('Test if when running getSavedCartItems function, the localStorage.getItem method is called with "cartItems" as parameter', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  // fail('Teste vazio');
});
