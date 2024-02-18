
function checkPrice(){
const fruit = document.getElementById("fruits").value;
let amount;
                    
switch(fruit){
case "apple":
amount = "$1.92"
document.getElementById("price").innerHTML = " The price of " + fruit + " is " + amount;
break;
case "banana":
amount = "$1.78"
document.getElementById("price").innerHTML = " The price of " + fruit + " is " + amount;
break;
case "cherry":
amount = "$1.21"
document.getElementById("price").innerHTML = " The price of " + fruit + " is " + amount;
break;
case "mango":
amount = "$1.90"
 document.getElementById("price").innerHTML = " The price of " + fruit + " is " + amount;
break;
 case "orange":
 amount = "$1.23"
document.getElementById("price").innerHTML = " The price of " + fruit + " is " + amount;
break;
case "strawberry":
amount = "$1.00"
document.getElementById("price").innerHTML = " The price of " + fruit + " is " + amount;
break;
                        
}

                   } 