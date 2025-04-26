// Change logo text
document.querySelector('.logo').textContent = "MyShop Superstore";

// Change body background color
document.querySelector('body').style.backgroundColor = "#eef2f3";

// Change h1 text
document.querySelector('h1').textContent = "Welcome to MyShop - Best Deals!";

// Modify navbar
const navbar = document.querySelector('.navbar');
navbar.style.backgroundColor = 'darkgreen';
navbar.style.padding = '20px';

// Add "Add New Product" button
const productsSection = document.querySelector('.product-grid');
const newProductButton = document.createElement('button');
newProductButton.textContent = 'Add New Product';
newProductButton.classList.add('buy-btn');
document.querySelector('main').insertBefore(newProductButton, productsSection);

newProductButton.addEventListener('click', () => {
    const newProduct = document.createElement('div');
    newProduct.className = 'product-item';
    newProduct.innerHTML = `
        <h2>New Product</h2>
        <img src="images/new_product.jpg" alt="New Product">
        <p class="price">$99.99</p>
        <button class="buy-btn">Buy Now</button>
    `;
    productsSection.appendChild(newProduct);
});

// Add "Remove Last Product" button
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove Last Product';
removeButton.classList.add('buy-btn');
document.querySelector('main').appendChild(removeButton);

removeButton.addEventListener('click', () => {
    const productItems = document.querySelectorAll('.product-item');
    if (productItems.length > 0) {
        productsSection.removeChild(productItems[productItems.length - 1]);
    }
});
