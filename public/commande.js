document.getElementById('orderForm').addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const fnom = document.getElementById("nom").value;
    const faddress = document.getElementById("adresse").value;
    const fcontact = document.getElementById("contact").value;

  
    // Store form data in localStorage 
    localStorage.setItem("fnom", fnom);
    localStorage.setItem("faddress", faddress);
    localStorage.setItem("fcontact", fcontact);
    

    // Retrieve and display form data as confirmation
    const nomloaded = localStorage.getItem("fnom");
    const addressloaded = localStorage.getItem("faddress");
    const contactloaded = localStorage.getItem("fcontact");


    const confirmationDiv = document.getElementById('validation');
    confirmationDiv.innerHTML = 
        `<h3>Commande validation</h3>
        <p>Nom: ${nomloaded}</p>
        <p>Adresse: ${addressloaded}</p>
        <p>Contact: ${contactloaded}</p>`;
        
});


//fucntion for navbar 
function openmenu() {
    document.getElementById("sidemenu").style.right = "0"; 
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px"; 
}