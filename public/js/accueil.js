 
    // Display featured products
    function displayFeaturedProducts(products) {
    const container = document.getElementById('featured-products-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card'); 
    
        productCard.innerHTML = `
            <img src="${product.image}">
            <h3>${product.nom_produit}</h3>
            <p>${product.prix}</p>
            <a href="detailsProduit.html?product=${product.nom_produit}" class="details-link">Voir les détails</a>
        `;
        container.appendChild(productCard);
    });
    }

     // Fetch products from the JSON file and display featured products
     fetch('./produits.json')
     .then(response => response.json())
     .then(data => {
         const featuredProducts = data.slice(0, 3); 
         displayFeaturedProducts(featuredProducts);
     })


//fucntion for navbar 
function openmenu() {
    document.getElementById("sidemenu").style.right = "0"; 
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px"; 
}




 
   



