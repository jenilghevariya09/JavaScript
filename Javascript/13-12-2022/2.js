//prompt
function day2() {
    let age = prompt('your is age', 20);
    alert(`hello your age is ${age} years` );
}

// confirm
function verify() {
    let human = confirm("are you Human?");
    alert(human);
}

// type conversation alert to other data type

    //Boolean to string
function stringConvert() {
    let value = "true";
    alert(typeof value);
}

    //String to number
function numberConvert() {
 a = prompt('enter number 1 ');
         operator = prompt('enter oprator +, -, *, or/');
         b = prompt('enter number 2 ');

    if(operator == "+"){
         calc = Number(a) + Number(b)
    }
        else if (operator == "-"){
         calc = Number(a) - Number(b)
        }
            else if (operator == "*"){
             calc = Number(a) * Number(b)
            }
                else{
                 calc = Number(a) / Number(b)
                }
    alert(calc);
            }

function cal() {
    x = prompt('enter number 1 ');
    operators = prompt('enter oprator +, -, *, or/');
    y = prompt('enter number 2 ');
    
    let calcc = operators == "+" ? Number(x) + Number(y) :  operators == "-" ? Number(x) - Number(y) : operators == "*" ? Number(x) * Number(y) :  Number(x) / Number(y);
    alert(x + operators + y + `=` + calcc);
}

