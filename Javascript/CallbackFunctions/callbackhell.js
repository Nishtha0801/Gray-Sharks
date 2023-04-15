const cart = ['almonds', 'milk', 'butter', 'bread'];

// Callback hell => Pyramid of the doom

createOrder(cart, (items) => {
    console.log("fetch the items in the cart");
    proceedToPayment(items, (price) => {
        console.log("Payment time");
        producePaymentReceipt(price, (totalPayment) => {
            console.log("Recipt formed");
            showOrderSummary(totalPayment, () =>{
                console.log("Shown order summary");
            })
        });
    })
});