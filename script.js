// script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById('product-grid');

      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <small>${product.collaboration}</small>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading products:", err);

        const container = document.getElementById('product-grid');  
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Failed to load products. Please try again later.';

    });
});

