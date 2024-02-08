// const { a } = require("vitest/dist/suite-MFRDkZcV")

// const { e } = require("vitest/dist/reporters-rzC174PQ")

// index.js
const ramenUrl = "http://localhost:3000/ramens"



fetch(ramenUrl)
.then((response) => response.json())
.then((ramens) => {
  for (ramen of ramens) {
      main(ramen) 
  }
})
let ramenMenu = document.querySelector("#ramen-menu")
let h2 = document.querySelector(".name")
let h3 = document.querySelector(".restaurant")
let imageElement = document.querySelector(".detail-image")
let rating = document.querySelector("#rating-display")
let comment = document.querySelector("#comment-display")




// Callbacks
const handleClick = (ramen) => {
  // Add code
  let ramenName = ramen.name
  let ramenRestaurant = ramen.restaurant
  let ramenImage = ramen.image
  let ramenRating = ramen.rating
  let ramenComment = ramen.comment
h2.textContent = ramenName
h3.textContent =  ramenRestaurant
imageElement.src = ramenImage
rating.textContent = ramenRating
comment.textContent = ramenComment  

  
};

const addSubmitListener = () => {
  let form = document.querySelector("#new-ramen")
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let newName = event.target["name"].value;
    let newRestaurant = event.target["restaurant"].value;
    let newImage = event.target["image"].value;
    let newRating = event.target["rating"].value;
    let newComment = event.target["new-comment"].value;
    console.log(newName, newRestaurant, newImage, newRating, newComment)
    let imgElement2 = document.createElement('img')
    imgElement2.src = newImage
    ramenMenu.append(imgElement2)
    imgElement2.addEventListener('click', () => {
      h2.textContent = newName
      h3.textContent = newRestaurant
      imageElement.src = newImage
      rating.textContent = newRating
      comment.textContent = newComment
    })

  });
 
}
addSubmitListener()

const displayRamens = (ramen) => {
  // Add code
  let imgElement = document.createElement("img")
  imgElement.src = ramen.image
  ramenMenu.append(imgElement)
  imgElement.addEventListener('click', () => {
    handleClick(ramen)
  })
};

const main = (ramen) => {
  
  displayRamens(ramen)
  
}