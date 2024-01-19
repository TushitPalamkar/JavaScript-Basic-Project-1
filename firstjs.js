//document.getElementById("count-el").innerText=5;
//let count=0
//console.log(count)
let countEL=document.getElementById("count-el")
let count=0
let saveEL=document.getElementById("save-el")
let ans
function increment()
{   
    count=count+1
    countEL.innerText=count
    console.log(count)
}
function save()
{   
    
    ans=count +" - "
    saveEL.textContent+=ans
    
}
function reset()
{
    countEL.innerText=0
    count=0
}
