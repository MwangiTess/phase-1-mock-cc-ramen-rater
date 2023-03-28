// write your code here

const ramenMenu = document.getElementById('ramen-menu');
console.log(ramenMenu);
const ramenDetails = document.getElementById("ramen-detail");
console.log(ramenDetails);
const detailImage = document.querySelector(".detail-image")
console.log(detailImage);
const names = document.querySelector(".name")
console.log(names);
const restaurant = document.querySelector("#new-restaurant")
console.log(restaurant);
const form = document.getElementById("new-ramen");
console.log(form);
const textArea = document.getElementById("new-comment")
console.log(textArea);
const comment = document.getElementById('comment-display')
console.log(comment);
const rating = document.getElementById('rating-display')
console.log(rating);
const createBtn = document.querySelector('input[type="submit"]')
console.log(createBtn)

createBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log("create Button Clicked");
    let name = names.value;
    let restaurant = restaurant.value;
    let image = detailImage.value;
    let rating = rating.value;
    let comment =comment.value;

    if (name === "" || resturant === "" || image === "" || rating === "" || comment === "" ){
        alert("Hey name and age are required");
        return;
      }

})

let data = {
    name: names.value,
    restaurant: restaurant.value,
    image: detailImage.value,
    rating :rating.value,
    comment: comment.value
}

data = JSON.stringify(data);
console.log(data);

fetch(" http://localhost:3000/ramens", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function (response) {
    return response.json();
  })
  .then(data => {
    let template =""
    data.forEach(data => {
        template += `
        <div class = "data"> 
            <img src ="${data.image.slice(2, data.image.length)}"/>
            <h2>${data.name}</h2>
            <p>${data.restaurant}</p>
            <p>${data.rating}</p>
            <p>${data.comment}</p>
        </div>
        
        `
        //data.innerHTML = template
        document.getElementById('dynamic_data').innerHTML = template
        console.log(template);
    })

    })
  //.then(result => console.log(result))
  .catch(function (error) {
    console.log("There was an error");
    console.log("Error", error);
  });


