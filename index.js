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

//console.log("------------CONSOLE LOG IS HERE");
//  oh so stuff out here also gets called.
//  why isn't it calling inside then
function addToCart(item) {
  var numInternal = Math.floor(Math.random()*100) + 1;
    // floor rounds down to integer, random is something between 0.1.
  var objInternal = {
    itemName : item,
    itemPrice : numInternal,
  }
  cart.push(objInternal);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var stringInternal;
  var objInternal;
  var numInternal;

  if (cart.length === 0) {
    stringInternal = "Your shopping cart is empty.";
  }
  else {
    numInternal = 1; // this is to match human positioning in array
    stringInternal =  "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) { // AAAAAAAAAAAAAAAA
      //objInternal = cart[i];
      //stringInternal = stringInternal + objInternal.itemName + "at $" + objInternal.itemPrice;
      // oh they want me to use ${}. okay. fine.
      stringInternal = stringInternal + `${cart[i].itemName} at $ ${cart[i].itemPrice}`;
      numInternal++;

      // setup for next item
      if (numInternal < cart.length - 1){ // next is not final item
        stringInternal = stringInternal + ", ";
      }
      else if (numInternal === cart.length - 1) { // next is final item
        stringInternal = stringInternal + ", and";
      }
      else if (numInternal === cart.length) { // all items read
        stringInternal = stringInternal + ".";
      }
    }

  }
  console.log("------------CONSOLE LOG IS HERE"); // this doesn't print
  console.log(stringInternal);
  return stringInternal
}

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}
