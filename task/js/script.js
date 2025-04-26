1. Change text content dynamically
document.querySelector('.logo').textContent = "MyShop Superstore";

// 2. Modify CSS styles dynamically
document.querySelector('body').style.backgroundColor = "#eef2f3";
document.querySelector('h1').style.color = "blue";

// 3. Add a new product item dynamically
const newProduct = document.createElement('div');
newProduct.classList.add('product-item');
newProduct.innerHTML =
    <h2>New Product</h2>
    <img src="images/new_product.jpg" alt="New Product">
    <p class="price">$99</p>
    <button class="buy-btn">Buy Now</button>
;

// Add it into the product-grid
const productGrid = document.querySelector('.product-grid');
productGrid.appendChild(newProduct);

// 4. Create a button to remove last product
const removeButton = document.createElement('button');
removeButton.textContent = "Remove Last Product";
removeButton.className = "buy-btn";
removeButton.style.marginTop = "20px";

// Add remove button after product grid
productGrid.parentElement.appendChild(removeButton);

// 5. Button click to remove last product item
removeButton.addEventListener('click', function() {
    const lastProduct = document.querySelector('.product-grid').lastElementChild;
    if(lastProduct) {
        lastProduct.remove();
    }
});