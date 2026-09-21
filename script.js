// STEP 1: Collect all products

const allProducts = [];

for (const category of storeData.categories) {

    for (const subcategory of category.subcategories) {

        for (const product of subcategory.products) {

            allProducts.push(product);

        }
    }
}

console.log("Products Loaded:", allProducts.length);

// STEP 2: Search Button

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const targetPrice = Number(
        document.getElementById("priceInput").value
    );

    if (!targetPrice) {
        alert("Enter a price");
        return;
    }

    // STEP 3: Find closest products

    let closestProducts = [...allProducts];

    closestProducts.sort((a, b) => {

        return Math.abs(a.price - targetPrice)
             - Math.abs(b.price - targetPrice);

    });

    closestProducts = closestProducts.slice(0, 3);

    displayProducts(closestProducts);

});


// STEP 4: Display Cards

function displayProducts(products) {

    const results = document.getElementById("results");

    results.innerHTML = "";

    products.forEach(product => {

        results.innerHTML += `
            <div class="card">

                <h3>${product.name}</h3>

                <p><strong>Brand:</strong> ${product.brand}</p>

                <p><strong>Price:</strong> ₹${product.price}</p>

                <p><strong>Rating:</strong> ⭐${product.rating}</p>

                <button>View Product</button>

            </div>
        `;
    });

}