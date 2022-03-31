const getSavedCartItems = () => {
  // A função getSavedCartItems deve recuperar os itens do carrinho de compras do localStorage quando carregamos a página.
  // Recebe a string
  const cartItem = localStorage.getItem('cartItems');
  // Transformar a string em objeto de novo
  // JSON.parse(cartItem)
  // Porem eu pus esse código no script ao chamar essa função pq nos testes tava dando capim na palheta
  // No script.js adicionei JSON.parse na função getSavedCartItems
  return cartItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
