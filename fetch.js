'use strict';

async function fetchItems() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayProducts() {
  const productsContainer = document.querySelector('.products');
  const loading = document.querySelector('.loading');
  const error = document.querySelector('.error');
  loading.style.display = 'block';

  try {
    const products = await fetchItems();

    if (!products) {
      productsContainer.innerHTML =
        '<p class="text-danger">No products available.</p>';
      return;
    }

    productsContainer.innerHTML = products
      .map((product) => {
        return `
          <div class="col-md-4 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
              <img src="${product.image}" class="img-thumbnail card-img-top " alt="${product.title}">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text text-muted">${product.category}</p>
                <p class="card-text">${product.description.slice(0, 100)}...</p>
                <div class="mt-auto">
                  <p class="card-text fw-bold text-primary">$${product.price}</p>
                  <button class="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  } catch (fetchError) {
    console.log(fetchError);
    error.textContent = 'Failed to load products. Please try again later.';
    error.style.display = 'block';
    loading.style.display = 'none';
  }
}

displayProducts();
