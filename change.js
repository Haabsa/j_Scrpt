let name = document.getElementById('name');

let smb = document.getElementById('smb');

smb.addEventListener("mouseover",function(){
    name.style.color = 'orange'
});
smb.addEventListener("mouseout",function(){
    name.style.color = 'cyan'
});
smb.addEventListener("click",function(){
    name.style.color = 'magenta'
});
