// let tbody = document.querySelector("body")
let myForm = document.getElementById("add-post-form")as HTMLFormElement


myForm.addEventListener("submit", onSubmit)

function onSubmit(ev){
    ev.preventDefault()
    console.log("recived")
    addDivImg()
}

function addDivImg(){
 
    //get form input
    let inputImage = document.getElementById("inputImage") as HTMLInputElement
    let inputCap = document.getElementById("inputHeader") as HTMLInputElement
    let inputText = document.getElementById("inputText") as HTMLInputElement

   //creats box div with elements
    let newDiv:HTMLDivElement = document.createElement("div") 
    let newImg:HTMLImageElement  =  document.createElement("img")
    let newHead:HTMLHeadingElement = document.createElement("h5")
    let newText:HTMLParagraphElement = document.createElement("p")

    //fill the box
    newImg.setAttribute("src",inputImage.value)
    newHead.innerText = inputCap.value
    newText.innerText = inputText.value
   

    //order in html
    newDiv.appendChild(newImg)
    newDiv.appendChild(newHead)
    newDiv.appendChild(newText)

    newDiv.classList.add("class_new")
    let gallery_Container = document.querySelector(".container") as HTMLDivElement
    gallery_Container.appendChild(newDiv)

 
    //reset input
    inputImage.value = ""
    inputCap.value = ""
    inputText.value = ""
}