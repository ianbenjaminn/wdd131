const PI = 3.14;
let radius = 3;

let area = PI * radius * radius * PI;

console.log(area);

radius = 20;
                    
area = PI * radius * radius * PI;

console.log(area);

const one = 1;
const two = '2';

let result = one * two
console.log(result);

let course = "CSE131"; //global scope
if (true) {
    let student = "Ian";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
//console.log(student); //does not work, can't access a block variable outside the block
                    