// Function to get the 'product' query parameter from the URL,  URL parameter called "product" 
function getProductFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product');
}

// Fetch and display product details by 'nom_produit'
function displayProductDetails() {
    const productName = getProductFromUrl();

    fetch('./produits.json')
        .then(response => response.json())
        .then(data => {
             
            const product = data.find(item => item.nom_produit === productName);

                const productContainer = document.getElementById('product-container');

                const caracteristiques = Object.entries(product.caracteristiques)
        
                productContainer.innerHTML = `
                    <img src="${product.image}">
                    <h2>${product.nom_produit}</h2>
                    <p>${product.descriptif}</p>
                    <p>Price: ${product.prix}</p>
                    <button id="add-to-cart" class="buy">Ajouter au panier</button>
                    <h3>caracteristiques</h3>
                    <ul>${caracteristiques}</ul>
                `;

                // Add click event to the "Add to Cart" button
                document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product));
            });

}

// Function to add product to local storage cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(`${product.nom_produit} ajouté au panier !`);
}


// Call function to display product details on page load
document.addEventListener('DOMContentLoaded', displayProductDetails);


//fucntion for navbar 
function openmenu() {
    document.getElementById("sidemenu").style.right = "0"; 
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px"; 
}
