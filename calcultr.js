const  num1 = document.querySelector("#num1");
const num2 =document.querySelector("#num2");
const result = document.querySelector("#result");
//button zetu
const add1 = document.querySelector("#add");
const sub1 = document.querySelector("#sub");
const div1 = document.querySelector("#div");
const mult1 = document.querySelector("#mult");
const module1 = document.querySelector("#module");

add.addEventListener('click',function(){
    const sum = Number(num1.value) + Number(num2.value);
    result.value = sum;
});
sub.addEventListener('click',function(){
    const subs = Number(num1.value) - Number(num2.value);
    result.value = subs;
});
div.addEventListener('click',function(){
    const dived = Number(num1.value) / Number(num2.value);
    result.value = dived;
});
mult.addEventListener('click',function(){
    const multipy = Number(num1.value) * Number(num2.value);
    result.value = multipy;
});
module.addEventListener('click',function(){
    const module = Number(num1.value) % Number(num2.value);
    result.value = module;
});