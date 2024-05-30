document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("productModal");
    const modalProductName = document.getElementById("modalProductName");
    const modalProductPrice = document.getElementById("modalProductPrice");
    const modalProductDescription = document.getElementById("modalProductDescription");
    const closeModal = document.getElementsByClassName("close")[0];
    const products = document.querySelectorAll(".product-item");
    products.forEach(product => {
        product.addEventListener("click", function() {
            const name = product.getAttribute("data-name");
            const price = product.getAttribute("data-price");
            const description = product.getAttribute("data-description");
            modalProductName.textContent = name;
            modalProductPrice.textContent = price;
            modalProductDescription.textContent = description;
            modal.style.display = "block";
        });
    });
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
