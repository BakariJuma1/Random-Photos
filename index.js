const container = document.querySelector(".image-container");
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", function () {
  addImage();
});

function addImage() {
  const newImage = document.createElement("img");
  newImage.src = `https://picsum.photos/300?random=${Math.floor(
    Math.random() * 2000
  )}`;
  container.appendChild(newImage);
}
