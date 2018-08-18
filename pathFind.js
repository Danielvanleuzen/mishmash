
  
 
  const objects = {
    foo: "Bar",
  name: "Dave",
  year: 1988, author: { name: "Stephen" } ,
  book: {
    author: {
      name: "Yuval"
    },
    year: 2015
  },
  category: "Science"
}
   
  
  var path = ['foo'];

module.exports.pathFind = function pathFind(){return Object.values(objects)};  
 
//var result = objArray.map(a => a.foo)


console.log(Object.values(objects))




/*

1.  The function will be called with two parameters: `pathFind(path, object)`. 
Where `path` is an array of strings and the `object` parameter is an object. The array of strings refer to a sequence of properties on the object and its nested objects. Here are some examples of how it should work:
    ```js
    pathFind(["foo"], { foo: "bar" }) // === "bar"
    pathFind(["name"], { name: "Dave" }) // === "Dave"
    pathFind(["author", "name"], { year: 1988, author: { name: "Stephen" } }) // === "Stephen"
    pathFind(["book", "author", "name"], {
      book: {
        author: {
          name: "Yuval"
        },
        year: 2015
      },
      category: "Science"
    }) // === "Yuval"
    ```
1.  The function should be a pure function, neither of the inputs should be mutated.
1.  The function should be recursive. If you don't manage making it recursive, it's more important that it returns the expected outputs.
*/