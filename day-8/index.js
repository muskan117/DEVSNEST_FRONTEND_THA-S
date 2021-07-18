const whiteDivs = [119,138,157,176,195,214,215,216,217,218,219,220,221,222,223,243,262,281,300,319,128,127,126,125,124,143,162,181,200,238,257,276,295,314,313,312,311,310,129,224,309
];

let container = document.getElementById("container");

for (let i = 0; i < 399; i++) {
  let box = document.createElement("div");
  box.className = "box";
  if (whiteDivs.includes(i)) {
    box.classList.add("change");
  }
  container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.classList.toggle("change");
  });
});
