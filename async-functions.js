
const value  = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}
console.log(value)

module.exports.giveItBackLater = function(value, callback){
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 1000)
}

//The function `promiseToGiveItBackLater(value)` should return a promise that will resolve with the `value` later. 
//**It should use `giveItBackLater`.** 
//Meaning, you will wrap your callback-style function `giveItBackLater` with a promise-style version. 

module.exports.promiseToGiveItBackLater = function(){
    return new Promise((resolve) => {
        giveItBackLater(value, resolve)
      })  
    }

    

//addSomePromises should chain promises and return a new promise

module.exports.addSomePromises = function() {
    return new Promise((resolve, reject) => {
       
          if(somePromise !== undefined) {
            resolve(console.log(somePromise+somePromise))
          } else {
            reject(console.log(somePromise+somePromise+somePromise))
          }})}