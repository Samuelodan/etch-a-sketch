const sketchPadElement = document.getElementById("sketch-pad");

let mouseisDown = false;

sketchPadElement.addEventListener("mousedown", () => mouseisDown = true);
sketchPadElement.addEventListener("mouseup", () => mouseisDown = false);
sketchPadElement.addEventListener("dblclick", () => mouseisDown = true);
sketchPadElement.addEventListener("mousemove", (e) => {
  if (mouseisDown){
    e.target.style.backgroundColor = "yellow";
  }
  
});

// //disable drag & drop
// sketchPadElement.addEventListener("dragstart", (e) => {
//   e.preventDefault();
// })


// const newButton = document.querySelector("header button");
// newButton.addEventListener("click", newPad);

function makeDivs(gridCount) {
  for (i = 1; i <= gridCount; i++){
    const divElement = document.createElement("div");
    sketchPadElement.appendChild(divElement);
  }
}

function newPad() {
  const gridRoot = parseInt(prompt("How many boxes do you want per side?", "30"));
  
  if (gridRoot < 16 || gridRoot > 100){
    alert("Make sure the number is between 16 and 100")
    return newPad();
  };

  sketchPadElement.innerHTML = "";
  makeDivs(gridRoot**2);
  makeGrid(gridRoot)

}

function makeGrid(number) {
  //Reset style
  sketchPadElement.style.gridTemplateColumns = "";
  //Add style
  sketchPadElement.style.gridTemplateColumns = " 1fr".repeat(number)
}

function makeDefaultGrids(gridCount) {
  makeDivs(gridCount**2);
  makeGrid(gridCount);
}

makeDefaultGrids(16);

