/*Invoke the anonymous function that is a parameter of the nameFilter function
Expected  output in console:

        This Ran
        This Ran
        ['John', 'Roger']
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
]

var results = [];

var nameFilter = function(anonymousFunction, filteredName) {
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            results.push(currentName)
        }
    }

    return results;
}

function run() {
    console.log("This Ran\nThis Ran")
}
var filteredNames = nameFilter(run(), "Betty");
console.log(filteredNames)
