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

products('computador');

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

window.onload = () => { };
