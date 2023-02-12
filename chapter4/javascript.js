const floatingImage = document.querySelector("#floating-image");

const imageWidth = floatingImage.offsetWidth;
const imageHeight = floatingImage.offsetHeight;

function moveImage() {
  const x = Math.floor(Math.random() * (window.innerWidth - imageWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - imageHeight));
  floatingImage.style.top = x + "px";
  floatingImage.style.left = y + "px";
}

setInterval(moveImage, 1000);

const cake = document.querySelector(".cake");
cake.addEventListener("click", function () {
  window.location.replace("end/end.html");
});
