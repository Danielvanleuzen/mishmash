//class ShoppingCart{}





  function ShoppingCart (itemName, quantity, price){
    this.addItem = function(itemName, quantity, price){var newItem = [this.itemName, this.quantity, this.price]; return newItem}
    this.addItemTest = function(){return ['name: ' + itemName, 'quantity: ' + quantity,"pricePerUnit: "+ price]}
    this.getItems = function(){return []}
    this.clear = function(){getItems.length = 0}
    }
  
var Cart = new ShoppingCart('Trash can', 12, 2)



console.log(Cart)
//function Area(a,b) {var Area2 = a*b; return Area2}
 
// var ar = [1,2,3]
// console.log(ar)
// var TT = function CL (){return ar.lenght = 0  }
// TT
// console.log(ar)



 


// 1.  Given a brand new instance of the class `cart`, when calling `cart.getItems()`, should return an empty array.
// 1.  The class should have a method `cart.addItem(itemName, quantity, price)`, which adds a new item to an internal array. 
// 1. After adding items, a call to `cart.getItems()` should return the added items. 
// 1. Items in the array should be in this format:
//     ```js
//     {
//       name: "Name of the item",
//       quantity: 1,
//       pricePerUnit: 99.99
//     }
//     ```
// 1.  Calling `cart.clear()` should remove all items from the items array.
// 1.  Calling `cart.clone()` should return a _new_ `ShoppingCart` object that contains all the same items. 
// However, the items array and all the items inside should be **copied** so that any changes to one of the carts does not affect the other.

module.exports = ShoppingCart
//var ShoppingCart = require('./ShoppingCart'); > in other module
//1.  You must create a module named `ShoppingCart`. The module must export a `class`, as its default export!