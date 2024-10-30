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

    cart.forEach((product, index) => {
        const productElement = document.createElement('p');
        productElement.textContent = `Product: ${product.nom_produit}, Price: ${product.prix}`;


        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa-solid fa-trash');
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.addEventListener('click', () => removeFromCart(index));
        
        productElement.appendChild(deleteIcon);
        cartDiv.appendChild(productElement);
    });
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


//fucntion for navbar 
function openmenu() {
    document.getElementById("sidemenu").style.right = "0"; 
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px"; 
}