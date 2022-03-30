// const fetch = require('node-fetch');

const fetchItem = async (ItemID) => {
  // A função fetchItem que você irá implementar, deve consumir o seguinte endpoint: "https://api.mercadolibre.com/items/$ItemID"
  const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
  const item = await (await fetch(endpoint)).json();
  // console.log(item);
  return item;
};

// fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
