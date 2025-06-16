
const products = [
    {
        name: " Headphones",
        category: "electronics",
        price: 199.99,
        inventory: 15
    },
    {
        name: " T-Shirt",
        category: "apparel", 
        price: 29.99,
        inventory: 25
    },
    {
        name: "Mango",
        category: "groceries",
        price: 4.99,
        inventory: 50
    },
    {
        name: "Dish Soap",
        category: "household",
        price: 8.99,
        inventory: 30
    },
    {
        name: "Keyboard",
        category: "electronics",
        price: 79.99,
        inventory: 12
    }
];

console.log("Initial Product Inventory:");
products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - $${product.price} (${product.inventory} in stock)`);
});
console.log("");

console.log(" Applying Category-Based Discounts:");

for (const product of products) {
    let categoryDiscount = 0;
    
    switch (product.category) {
        case "electronics":
            categoryDiscount = 0.20; 
            break;
        case "apparel":
            categoryDiscount = 0.15; 
            break;
        case "groceries":
        case "household":
            categoryDiscount = 0.10;
            break;
        default:
            categoryDiscount = 0; 
            break;
    }
    
    const discountAmount = product.price * categoryDiscount;
    const discountedPrice = product.price - discountAmount;
    
    product.discountedPrice = discountedPrice;
    product.categoryDiscount = categoryDiscount;
    
    console.log(`${product.name} (${product.category}): $${product.price.toFixed(2)} → $${discountedPrice.toFixed(2)} (${(categoryDiscount * 100)}% off)`);
}
console.log("");

const customerTypes = ["regular", "student", "senior"];
console.log(" Customer Type Additional Discounts:");

customerTypes.forEach(type => {
    let extraDiscount = 0;
    
    if (type === "student") {
        extraDiscount = 0.05; 
    } else if (type === "senior") {
        extraDiscount = 0.07; 
    } else {
        extraDiscount = 0; 
    }
    
    console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} customers: ${extraDiscount * 100}% additional discount`);
});
console.log("");

console.log(" CHECKOUT SIMULATION ");

const customerCarts = [
    {
        type: "regular",
        items: [
            { productIndex: 0, quantity: 1 }, 
            { productIndex: 1, quantity: 2 } 
        ]
    },
    {
        type: "student", 
        items: [
            { productIndex: 2, quantity: 3 }, 
            { productIndex: 3, quantity: 1 },
            { productIndex: 4, quantity: 1 }  
        ]
    },
    {
        type: "senior",
        items: [
            { productIndex: 0, quantity: 1 }, 
            { productIndex: 3, quantity: 2 }  
        ]
    }
];

for (let customerNum = 0; customerNum < customerCarts.length; customerNum++) {
    const customer = customerCarts[customerNum];
    let cartTotal = 0;
    
    console.log(` Customer ${customerNum + 1} (${customer.type}) `);
    
    for (const item of customer.items) {
        const product = products[item.productIndex];
        const itemTotal = product.discountedPrice * item.quantity;
        cartTotal += itemTotal;
        
        console.log(`  ${item.quantity}x ${product.name} @ $${product.discountedPrice.toFixed(2)} = $${itemTotal.toFixed(2)}`);
        
        product.inventory -= item.quantity;
    }
    
    let customerDiscount = 0;
    if (customer.type === "student") {
        customerDiscount = 0.05;
    } else if (customer.type === "senior") {
        customerDiscount = 0.07;
    }
    
    const customerDiscountAmount = cartTotal * customerDiscount;
    const finalTotal = cartTotal - customerDiscountAmount;
    
    console.log(`  Subtotal: $${cartTotal.toFixed(2)}`);
    if (customerDiscount > 0) {
        console.log(`  ${customer.type} discount (${customerDiscount * 100}%): -$${customerDiscountAmount.toFixed(2)}`);
    }
    console.log(`   FINAL TOTAL: $${finalTotal.toFixed(2)}`);
    console.log("");
}

const firstProduct = products[0];
for (const key in firstProduct) {
    if (firstProduct.hasOwnProperty(key)) {
        console.log(`${key}: ${firstProduct[key]}`);
    }
}
console.log("");

products.forEach((product, index) => {
    console.log(`\n Product ${index + 1}: ${product.name} `);
    
    for (const [key, value] of Object.entries(product)) {
        if (key === 'price' || key === 'discountedPrice') {
            console.log(`  ${key}: $${value.toFixed(2)}`);
        } else if (key === 'categoryDiscount') {
            console.log(`  ${key}: ${(value * 100)}%`);
        } else {
            console.log(`  ${key}: ${value}`);
        }
    }
});