    // Array to hold products added to the cart
    let listeProduits = [];

// Function to display products on the page
function displayProducts (productsToDisplay){
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';

    // Loop through each product in the array
    productsToDisplay.forEach((product) => {

        const productCard = document.createElement('div');
        productCard.classList.add('card'); 

        // Set the inner HTML of the card
        productCard.innerHTML = `
            <img src="${product.image}">
            <h3>${product.nom_produit}</h3>
            <a href="detailsProduit.html?product=${product.nom_produit}" class="details-link">Voir les détails</a>
        `;
        productContainer.appendChild(productCard); 
    });

}

// Fetch products from JSON file
fetch('produits.json')
    .then(response => response.json()) 
    .then(data => displayProducts(data)) 


//fucntion for navbar 
function openmenu() {
    document.getElementById("sidemenu").style.right = "0"; 
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px"; 
}


