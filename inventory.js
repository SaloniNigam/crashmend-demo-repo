function getItemPrice(items, index) {
    return items[index].price;
}

function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += getItemPrice(items, i + 1);
    }
    return total;
}

const inventory = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 50 }
];

console.log(calculateTotal(inventory));