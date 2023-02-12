const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");

a.addEventListener("click", function () {
  document.getElementById("a").innerHTML = "Correct";
  document.getElementById("jump").style.visibility = "visible";
});

b.addEventListener("click", function () {
  document.getElementById("b").innerHTML = "Close yet so far.";
});

c.addEventListener("click", function () {
  document.getElementById("c").innerHTML = "Hm...";
});

d.addEventListener("click", function () {
  document.getElementById("d").innerHTML = "Brain not the sharpest I see.";
});
