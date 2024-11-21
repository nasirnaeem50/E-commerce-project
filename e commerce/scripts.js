
function updateCartCount() {
    let cartCount = 0;
    
    document.getElementById("cart-count").innerText = cartCount;
}


function addToCart() {
    let cartCount = parseInt(document.getElementById("cart-count").innerText);
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Product has been added to your cart.");
}


function buyNow() {
    alert("Proceeding to buy the product!");
    window.location.href = "checkout.html"; // Change this to your checkout page
}


function placeOrder() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;
    const cardNumber = document.getElementById("card-number").value;
    const expirationDate = document.getElementById("expiration-date").value;
    const cvv = document.getElementById("cvv").value;

    
    if (name === "" || email === "" || address === "" || city === "" || state === "" || zip === "" || cardNumber === "" || expirationDate === "" || cvv === "") {
        alert("Please fill out all fields.");
        return;
    }

   
    alert("Order placed successfully!");
    window.location.href = "thank-you.html"; // Change this to your thank you page
}


document.addEventListener("DOMContentLoaded", function() {
    
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            let cartCount = parseInt(document.getElementById("cart-count").innerText);
            cartCount++;
            document.getElementById("cart-count").innerText = cartCount;
            alert("Product has been added to your cart.");
        });
    });

    
    const buyNowButtons = document.querySelectorAll(".buy-now-button");
    buyNowButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Proceeding to buy the product!");
            window.location.href = "checkout.html"; // Change this to your checkout page
        });
    });

    
    const placeOrderButton = document.querySelector("button.btn.btn-primary");
    if (placeOrderButton) {
        placeOrderButton.addEventListener("click", placeOrder);
    }

    
    updateCartCount();
});


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

const productDetails = {
    1: {
        title: "Dress 1",
        price: "$99.99",
        description: "This is an elegant dress perfect for formal occasions. Made from high-quality fabric, it provides both comfort and style.",
        image: "images/d1.jpg",
        specifications: ["Material: Silk", "Color: Black", "Available Sizes: S, M, L"],
        reviews: [
            { reviewer: "Jane Doe", comment: "Absolutely loved this dress! The fit and fabric are perfect." },
            { reviewer: "John Smith", comment: "Good quality and comfortable. Highly recommended." }
        ]
    },
    2: {
        title: "Dress 2",
        price: "$79.99",
        description: "This trendy dress is perfect for casual outings and parties. It is designed with vibrant colors and a comfortable fit.",
        image: "images/d2.jpeg",
        specifications: ["Material: Cotton", "Color: Red", "Available Sizes: M, L"],
        reviews: [
            { reviewer: "Alice Green", comment: "Beautiful color and design! Will buy again." }
        ]
    },
    3: {
        title: "Dress 3",
        price: "$69.99",
        description: "This chic dress is ideal for both day and night wear. It has a stylish cut and is made from soft, breathable material.",
        image: "images/d3.jpg",
        specifications: ["Material: Polyester", "Color: Blue", "Available Sizes: XS, S, M"],
        reviews: [
            { reviewer: "Sarah Blue", comment: "Very comfortable and trendy!" }
        ]
    },
    4: {
        title: "Dress 4",
        price: "$40.99",
        description: "This chic dress is ideal for both day and night wear. It has a stylish cut and is made from soft, breathable material.",
        image: "images/d4.jpg",
        specifications: ["Material: Polyester", "Color: Blue", "Available Sizes: XS, S, M"],
        reviews: [
            { reviewer: "Sarah Blue", comment: "Very comfortable and trendy!" }
        ]
    },
    5: {
        title: "Dress 5",
        price: "$80.99",
        description: "This chic dress is ideal for both day and night wear. It has a stylish cut and is made from soft, breathable material.",
        image: "images/d5.jpeg",
        specifications: ["Material: Polyester", "Color: Blue", "Available Sizes: XS, S, M"],
        reviews: [
            { reviewer: "Sarah Blue", comment: "Very comfortable and trendy!" }
        ]
    },
    6: {
        title: "Dress 6",
        price: "$70.99",
        description: "This chic dress is ideal for both day and night wear. It has a stylish cut and is made from soft, breathable material.",
        image: "images/d7.jpeg",
        specifications: ["Material: Polyester", "Color: Blue", "Available Sizes: XS, S, M "],
        reviews: [
            { reviewer: "Sarah Blue", comment: "Very comfortable and trendy!" }
        ]
    },
};


if (productDetails[productId]) {
    const product = productDetails[productId];
    document.getElementById("product-title").innerText = product.title;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-description").innerText = product.description;
    document.getElementById("product-image").src = product.image;

    
    const specs = product.specifications.map(spec => `<li>${spec}</li>`).join('');
    document.getElementById("product-specifications").innerHTML = specs;

    
    const reviews = product.reviews.map(review => `<p><strong>${review.reviewer}:</strong> "${review.comment}"</p>`).join('');
    document.getElementById("product-reviews").innerHTML = reviews;
}
