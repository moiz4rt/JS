//89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  Go to the editor
//For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

let guess_operator = (x, y, z) => {
    if(x+y == z){
        return `${x} + ${y} = ${z}`;
    } else if(x-y == z){
        return `${x} - ${y} = ${z}`;
    } else if(x*y == z){
        return `${x} * ${y} = ${z}`;
    } else if(x/y == z){
        return `${x} / ${y} = ${z}`;
    } else {
        return "There's no correlation between these numbers under any operators"
    }
}

console.log(guess_operator(10,2,20))