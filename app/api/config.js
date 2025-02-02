
//Конфиг с эндпоинтами

// export const BASE_URL = 'https://willing-beauty-4aeb52d244.strapiapp.com/api';

export const BASE_URL = 'http://localhost:1337/api';

export const endpoints = {
  products: `${BASE_URL}/products-plural`,
  collections:`${BASE_URL}/collections?populate=products`
}; 


