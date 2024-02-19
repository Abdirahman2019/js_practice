function addNumber(){
    const fnumber = document.getElementById("num1").value;
    const snumber = document.getElementById("num2").value;
    const result = Number(fnumber) + Number(snumber);
    alert("The result is =" + result);
}
function subTraction(){
    const fnumber1 = document.getElementById("num3").value;
    const snumber1 = document.getElementById("num4").value;
    const result1 = Number(fnumber1) - Number(snumber1);
    alert("The result is =" + result1);
}
function Division(){
    const fnumber2 = document.getElementById("num5").value;
    const snumber2 = document.getElementById("num6").value;
    const result2 = Number(fnumber2) / Number(snumber2);
    alert("The result is =" + result2);
}

