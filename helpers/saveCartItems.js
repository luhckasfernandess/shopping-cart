const saveCartItems = (object) => {
  // A função saveCartItems deve salvar os itens do carrinho de compras no localStorage, em uma chave denominada cartItems.
  // Transforma o objeto em string e salva em localStorage
  localStorage.setItem('cartItems', JSON.stringify(object));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
