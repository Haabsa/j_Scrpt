//console.log('suza');
//njia 5 za kuvta elemnt id,query selctr,selctr & ALL tagname 
//by id suza
//let suza =document.getElementById('suza');
//list of array
const textArray=["Welcome Suza!!!",
"Second Year",
"BITAM",
'In JavaScript Session'];

let index = 0;


//qury selctr  untumia elemnt yenyewe h1
const suza =document.querySelector('#suza');
console.log(suza)
//methd yetu kuset
//select fnction
//varible ya elemnt
//tun vuta ndni
//setTimeout(function(){
    //suza.innerHTML ='In JavaScript Session ';

//},2000);
setInterval(function(){
    index = (index + 1) % textArray.length;


    suza.innerHTML = `<h1>${textArray[index]}</h1>` ;

},2500);
