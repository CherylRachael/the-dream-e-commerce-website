document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scroll to links
    const links = document.querySelectorAll(".nav-links a, .btn");
    for (const link of links) {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Example of dynamic product loading
    const productGallery = document.querySelector(".product-gallery");
    const products = [
        { name: "Dreamscape Sofa", price: "$1200", img: "sofa.jpg" },
        { name: "Elegant Lamp", price: "$300", img: "lamp.jpg" },
        { name: "Modern Table", price: "$450", img: "table.jpg" }
    ];

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="#" class="btn">Buy Now</a>
        `;
        productGallery.appendChild(productItem);
    });
});
