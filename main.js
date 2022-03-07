const sketchPadElement = document.getElementById("sketch-pad");

sketchPadElement.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "yellow";
})

function makeDivs(gridCount) {
  for (i = 1; i <= gridCount; i++){
    const divElement = document.createElement("div");
    sketchPadElement.appendChild(divElement);
  }
}

function newPad() {
  const gridRoot = prompt("How many boxes do you want per side?", "1 - 100");
  makeDivs(gridRoot**2);
  makeGrid(gridRoot)

}

function makeGrid(number) {
  sketchPadElement.style.gridTemplateColumns = " 1fr".repeat(number)
}

function makeDefaultGrids(gridCount) {
  makeDivs(gridCount**2);
  makeGrid(gridCount);
}

makeDefaultGrids(16);

