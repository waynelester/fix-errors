/*Invoke the anonymous function that is a parameter of nameFilter function
Now pass in i as an argument of that function so we track each time the 
anonyomous function is invoked

Expected  output in console:

        This Ran 0
        This Ran 1 
        ['John', 'Roger']
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
]

let running = 0;
var nameFilter = function(filteredName, anonymousFunction) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        while (running < i) {
            running++;
            console.log("This Ran " + ([i] - 1));
        }
        let currentName = people[i].name
        if (currentName != filteredName) {
            results.push(currentName)

        }

    }

    return results
}

var filteredNames = nameFilter("Betty", function(name) {
    console.log("This Ran")
})
console.log(filteredNames)
