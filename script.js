const buttonElem=document.querySelector(".button");
buttonElem.addEventListener("mouseover",()=>{
    const x =(event.pageX -buttonElem.offsetLeft)
    const y=(event.pageY -buttonElem.offsetTop)
    buttonElem.style.setProperty("--xPosition",x + "px")
    buttonElem.style.setProperty("--yPosition",y +"px")
})