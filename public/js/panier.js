// Display the cart items
function displayCart() {
    const cartDiv = document.getElementById('cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Votre panier est vide.</p>';
        return;
    }

    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Votre panier:';
    cartDiv.appendChild(titleElement);

    let cartTotal = 0; 

    cart.forEach((product, index) => {
        const productElement = document.createElement('div'); 
        productElement.style.display = 'flex'; 
        productElement.style.alignItems = 'center';
        productElement.style.marginBottom = '10px';

        // Create and append the image
        if (product.image) {
            const productImage = document.createElement('img');
            productImage.src = product.image; 
            productImage.alt = product.nom_produit;
            productImage.style.width = '50px'; 
            productImage.style.height = '50px'; 
            productImage.style.marginRight = '10px'; 
            productElement.appendChild(productImage);
        }

        // Create text content for product name and price
        const productText = document.createElement('span');
        productText.textContent = `Product: ${product.nom_produit}, Price: ${product.prix} `;
        productElement.appendChild(productText);

        // Add quantity input
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = product.quantity || 1;  
        quantityInput.min = 1; 
        quantityInput.style.marginRight = '10px';
        quantityInput.style.width = '50px';
        quantityInput.addEventListener('change', () => updateQuantity(index, quantityInput.value));
        productElement.appendChild(quantityInput);

        
        const productTotal = (parseFloat(product.prix.replace(' €', '').replace(',', '.')) * quantityInput.value).toFixed(2);
        cartTotal += parseFloat(productTotal);

    
        const productTotalElement = document.createElement('span');
        productTotalElement.textContent = `Total: ${productTotal} €`;
        productElement.appendChild(productTotalElement);


        // Add delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa-solid fa-trash');
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.marginLeft = '10px';
        deleteIcon.addEventListener('click', () => removeFromCart(index));
        productElement.appendChild(deleteIcon);

        cartDiv.appendChild(productElement);
    });

    // Display the total price of the entire cart
    const cartTotalElement = document.createElement('div');
    cartTotalElement.style.fontWeight = 'bold';
    cartTotalElement.textContent = `Total du panier: ${cartTotal.toFixed(2)} €`;
    cartDiv.appendChild(cartTotalElement);
}

// Update the quantity in the cart and recalculate the total
function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart[index];

    if (newQuantity < 1) {
        alert("La quantité ne peut pas être inférieure à 1.");
        return;
    }

    product.quantity = newQuantity; 
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); 
}

// Remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); 
}

// Handle the commander button click
document.getElementById("commanderButton").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Votre panier est vide.");
        return;
    }
    localStorage.setItem('commande', JSON.stringify(cart));
    window.location.href = "commande.html";
});

document.addEventListener('DOMContentLoaded', displayCart);


// Function for navbar
function openmenu() {
    document.getElementById("sidemenu").style.right = "0"; 
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px"; 
}
