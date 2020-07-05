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
  var numInternal = Math.floor(Math.random()*100) + 1;
    // floor rounds down to integer, random is something between 0.1.
  var objInternal = {
    itemName : item,
    itemPrice : numInternal,
  }
  cart.push(objInternal);
}

function viewCart() {

}

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}
