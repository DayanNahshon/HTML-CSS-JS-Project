let myForm = document.getElementById("add-post-form")
myForm.addEventListener("submit", onSubmit)

function onSubmit(ev){
    ev.preventDefault()
    console.log("recived")
    addDivRecipe()
}

function addDivRecipe(){

    //get form input
    let nameInput = document.getElementById("recipeName")
    let imageInput = document.getElementById("recipesImg")
    let descriptionInput = document.getElementById("description")
    let websiteInput = document.getElementById("url")

    //creat box div with elements
    let newDivRecipe = document.createElement("div")
    let newNameRecipe = document.createElement("h3")
    let newImgRecipe = document.createElement("img")
    let newDescriptionRecipe = document.createElement("p")
    let newWebsiteRecipe = document.createElement("a")

    //fill the value in the box
    newImgRecipe.setAttribute("src",imageInput.value)
    newNameRecipe.innerText = nameInput.value 
    newDescriptionRecipe.innerText = descriptionInput.value 
    newWebsiteRecipe.innerText = websiteInput.value 

    //append box into html 
    newDivRecipe.appendChild(newNameRecipe)
    newDivRecipe.appendChild(newImgRecipe)
    newDivRecipe.appendChild(newDescriptionRecipe)
    newDivRecipe.appendChild(newWebsiteRecipe)

    //add class to the new div
    newDivRecipe.classList.add("Recipe")
    //get divRecipes
    let Recipe = document.querySelector(".Recipes")

    //add the new div box to divRecipes
    Recipe.appendChild(newDivRecipe)

    //reset the form
    nameInput.value = ""
    imageInput.value = ""
    descriptionInput.value = ""
    websiteInput.value = ""
}

   
    