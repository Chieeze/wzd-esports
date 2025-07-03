// products.js

// Function to fetch and display products
function displayProducts() {
    // Assuming you have an array of products with their details
    var products = [
        { name: 'Product 1', description: 'Description of Product 1', price: 19.99, imageUrl: 'path/to/image1.jpg' },
        { name: 'Product 2', description: 'Description of Product 2', price: 29.99, imageUrl: 'path/to/image2.jpg' },
        // Add more products as needed
    ];

    // Get the product list container
    var productList = document.getElementById('productList');

    // Loop through each product and create HTML elements
    products.forEach(function(product) {
        // Create a new product element
        var productElement = document.createElement('div');
        productElement.classList.add('apparel-item');

        // Populate the product element with details
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <label for="size-select">${product.name} Size:</label>
            <select id="size-select">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button>Add to Cart</button>
        `;

        // Append the product element to the product list
        productList.appendChild(productElement);
    });
}

// Call the function to display products when the page loads
window.onload = displayProducts;
