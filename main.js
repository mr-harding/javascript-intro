document.querySelector(".b-alert").addEventListener('click', function() {
      alert("Clicked");
});

document.querySelector(".b-cons").addEventListener('click', function() {
  console.log("Another click thing");
});

// First time through, don't include this, but then explain it's use to simplify code
const backColor = document.querySelector(".b-color")

backColor.addEventListener('click', function() {
  if (backColor.style.backgroundColor === "red") {
    backColor.style.backgroundColor = "rgb(189, 189, 189)";
  } else {
    backColor.style.backgroundColor = "red";
}
});

document.querySelector(".b-text").addEventListener('click', function() {
  document.querySelector(".b-text").innerHTML = "OMG it changed!";
});
