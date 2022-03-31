const getSavedCartItems = () => {
  // A função getSavedCartItems deve recuperar os itens do carrinho de compras do localStorage quando carregamos a página.
  // Recebe a string
  const cartItem = localStorage.getItem('cartItems');
  // Transformar a string em objeto de novo
  return JSON.parse(cartItem);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
