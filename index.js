var cart = [];
// oh how nice, i don't have to type out all the basics myself.

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// apparently the above are already done.

function addToCart(item) {
  var numInternal = Math.floor(Math.random()*10) + 1;
    // floor rounds down to integer, random is something between 0.1.
  var objInternal = {
    itemName : item,
    itemPrice : "b",
  }
}

function viewCart() {

}

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}
