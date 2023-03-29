const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const ramenForm = document.getElementById("new-ramen");
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    ramens.forEach((ramen) => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      ramenMenu.appendChild(img);
      img.addEventListener("click", () => {
        fetch(`http://localhost:3000/ramens/${ramen.id}`)
          .then((response) => response.json())
          .then((details) => {
            ramenDetail.innerHTML = `
                <h4>${details.name}</h4>
                <p>Restaurant: ${details.restaurant}</p>
                <img src="${details.image}" alt="${details.name}">
                <p>Rating: ${details.rating}</p>
                <p>Comment: ${details.comment}</p> `;
          })
          .catch((error) => console.error(error));
      });
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newName = document.querySelector("#new-name");
        const newImage = document.querySelector("#new-image");
        const newRestaurantName = document.querySelector("#new-restaurant");
        const newRating = document.querySelector("#new-rating");
        const newComment = document.querySelector("#new-comment");
        const newRamenName = document.createElement("h2");
        const newRamenImage = document.createElement("img");
        const newRamenRestaurant = document.createElement("p");
        const newRamenRating = document.createElement("p");
        const newRamenComment = document.createElement("p");
        newRamenName.textContent = newName.value;
        newRamenImage.src = newImage.value;
        newRamenRestaurant.textContent = newRestaurantName.value;
        newRamenRating.textContent = `Rating: ${newRating.value}`;
        newRamenComment.textContent = `Comment: ${newComment.value}`;
        ramenMenu.appendChild(newRamenImage);
        ramenForm.reset();
        newRamenImage.addEventListener("click", () => {
          detail.innerHTML = `
          <h4>${newRamenName.textContent}</h4>
          <p>Restaurant: ${newRamenRestaurant.textContent}</p>
          <img src="${newRamenImage.src}" alt="${newRamenName.textContent}">
          <p>Rating: ${newRamenRating.textContent}</p>
          <p>Comment: ${newRamenComment.textContent}</p> `;
        });
      });
    });
  });