module.exports.items=["orange","apple","ball"];

const person={
    name:"Paul"
}
module.exports.person=person;

const num1=10;
const num2=74;


// If a function is invoked in a module and not assigned to a variable in another module,it will be executed when the module is imported.

function add(){
    console.log(`The sum is: ${num1 + num2}`);
}
add();
