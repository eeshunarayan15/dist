






console.log("hello at first") 


var abc=document.querySelector('#elm1')
var image=(abc.getAttribute("data-image"))
console.log(abc)


var elmc=document.querySelector("#elm-container")
var fixed=document.querySelector("#fixed-image")
elmc.addEventListener("mouseenter",function(){
fixed.style.display="block"
console.log("mouse entered")
})
elmc.addEventListener("mouseleave",function(){
    fixed.style.display="none"
    console.log("mouse leave")
})
console.log("hello at last")
// var elem1=document.querySelector("#elm1")
// elem1.addEventListener("mouseenter",function(){
// var image=elem1.getAttribute("data-image");
// console.log(image);
// fixed.style.backgroundImage=`url(${image})`
// })

var elms=document.querySelectorAll(".elm")
console.log(elms)
elms.forEach(function(e){
console.log(e)

e.addEventListener("mouseenter",function(){
    var image=e.getAttribute("data-image");
    console.log(image);
    fixed.style.backgroundImage=`url(${image})`
})
})