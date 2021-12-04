const light = document.querySelector("div");
const redBtn = document.querySelector(".redBtn");
const blueBtn = document.querySelector(".blueBtn");
const yellowBtn = document.querySelector(".yellowBtn");

// function colorChange(color) {
//     for (let i of light.classList) {
//         if (i !== color) {
//             light.classList.remove(i);
//         }
//     }
//     light.classList.add(color);
// }

// redBtn.addEventListener("click", colorChange("red"));
// blueBtn.addEventListener("click", colorChange("blue"));
// yellowBtn.addEventListener("click", colorChange("yellow"));

redBtn.addEventListener("click", function() {
    for (let i of light.classList) {
        if (i !== "red") {
            light.classList.remove(i);
        }
    }
    light.classList.add("red");
});

blueBtn.addEventListener("click", function() {
    for (let i of light.classList) {
        if (i !== "blue") {
            light.classList.remove(i);
        }
    }
    light.classList.add("blue");
});

yellowBtn.addEventListener("click", function() {
    for (let i of light.classList) {
        if (i !== "yellow") {
            light.classList.remove(i);
        }
    }
    light.classList.add("yellow");
});
