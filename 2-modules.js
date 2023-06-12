// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// Import
const names = require('./4-names')
const sayHi = require('./utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') //Om vi har en funktion i en modul så måste man inte deklarera en variabel för att den ska köras.
// sayHi('Susan')
// sayHi(names.John)
// sayHi(names.Peter)


// local
const secret = 'SUPER SECRET'

// share
const John = 'John'
const Peter = 'Peter'

// export default
module.exports = {John, Peter}



module.exports.items = ['item1', 'item2']
const person = {
    name: 'bob',
}

module.exports.singlePerson = person

//Annorlunda syntax som de andra. Bra att veta när man läser andras kod.





const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1 + num2}`)
}

addValues()