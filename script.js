function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// Consegui resolver a promessa com a ajuda do Cadu na mentoria, que me ajudou a usar o console.log() no navegador
const products = async (searchValue) => {
  const computerArray = await fetchProducts(searchValue);
  // console.log(computerArray);
  computerArray.results.forEach((element) => {
    // Desestruturei abaixo com a ajuda do Zezé na mentoria, que me ajudou a raciocinar
    const { id: sku, title: name, thumbnail: image } = element;
    const product = { sku, name, image };
    const sectionClassItems = document.querySelector('.items');
    sectionClassItems.appendChild(createProductItemElement(product));
  });
};

// get sku? OMG! I can use in the shopping cart O.o
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Criar uma variável de escopo global pq já usei ela 3 vezes e o lint me ralhou por isso
const ol = document.querySelector('.cart__items');

function cartItemClickListener(event) {
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  // const remove = ol.removeChild(event.target);
  // O código acima deu erro ao executar a função getSavedLocalStorage, diz que o nó a ser removido não é filho deste nó, acho q do ol

  // Who is the father? It's the ol

  // Este outro método abaixo me ajudou a remover as li sem dar conflito nas funções
  // Source: https://api.jquery.com/remove/
  // remove() método no elemento no manipulador de eventos.

  // Remove o elemento clicado
  const remove = event.target.remove();
  // Atualiza o localStorage caso vc remova os itens do carrinho
  saveCartItems(ol.innerHTML);
 return remove;
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const createChildOl = async (event) => {
  // console.log(event.target)
  // Captura o id do botão usando parentNode para ver a section e o firstChild.innerText para pegar o texto do primeiro filho
  // const itemId = event.target.parentNode.firstChild.innerText;
  const getSku = event.target.parentNode;
  const itemId = getSkuFromProductItem(getSku); // get sku? All right!
  // Chama o fetchItem usando o id capturado no código anterior
  const item = await fetchItem(itemId);
 const { id: sku, title: name, price: salePrice } = item;
 const product = { sku, name, salePrice };
 ol.appendChild(createCartItemElement(product));
 // Adiciona itens no LocalStorage mas não atualiza caso vc remova esses items do carrinho
 saveCartItems(ol.innerHTML);
};

// Vou criar uma nova função para capturar os botões como o Cadu falou
const createButtonClickEvent = async () => {
  // Chamar a products(searchValue) para capturar os botões dos produtos
  await products('computador');
  const button = document.querySelectorAll('.item__add');
  button.forEach((e) => e.addEventListener('click', createChildOl));
};

const getSavedLocalStorage = () => {
  // console.log(getSavedCartItems());
  ol.innerHTML = JSON.parse(getSavedCartItems());
  // Excluir ao clicar nos itens salvos no localStorage
  ol.addEventListener('click', cartItemClickListener);
};

const emptyCart = () => {
  // Esvazia o carrinho sem apagar o ol
  ol.innerHTML = '';
  // Salva a alteração no localStorage
  saveCartItems(ol.innerHTML);
};

const emptyCartButton = document.querySelector('.empty-cart');
emptyCartButton.addEventListener('click', emptyCart);

createButtonClickEvent();
getSavedLocalStorage();

window.onload = () => { };
