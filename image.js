let img = document.querySelector('img');
//hover
img.addEventListener('mouseover',function(){
    img.style.width = "200px";
    img.style.height = "200px";
});
//size ileile
img.addEventListener('mouseout',function(){
img.style.width = "150px"
img.style.height = "150px"

});

let sbm = document.querySelector('button');
//console.log(sbm,img);
//move click
//vrable ytu sbm
sbm.addEventListener('click',function(){
    //img.style.transform = "translatex(500px)"
    if (img.style.left === '0px') {
        img.style.left = "calc(100% - 150px)";
    } else {
        img.style.left = '0px';
    }

});
console.log(sbm,img);