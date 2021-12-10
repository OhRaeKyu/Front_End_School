const selectBtn = document.querySelector(".btn-select");
const selectList = document.querySelector(".list-member");
const languageList = ["Python", "Java", "JavaScript", "C#", "C++"];
// let toggle = false;

for (const language of languageList) {
    const elementLi = document.createElement("li");
    const elementBtn = document.createElement("button");
    elementBtn.setAttribute("type", "button");
    elementBtn.textContent += language;
    selectList.appendChild(elementLi).appendChild(elementBtn);

    // 좋지 않은 코드 : innerHTML의 비용이 많이들어 좋지 않다.
    // selectList.innerHTML += `<li><button type="button">${iterator}</button></li>`;
}

selectBtn.addEventListener("click", function() {
    selectBtn.classList.toggle("on");

    // 좋지 않은 코드 : js에서 스타일을 건드는 것은 좋지 않다.
    // if (toggle === false) {
    //     selectList.style.display = "block";
    //     toggle = true;
    // }
    // else {
    //     selectList.style.display = "none";
    //     toggle = false;
    // }
});

selectList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        selectBtn.classList.remove("on");
        selectBtn.textContent = event.target.innerText;
    }
    
    // 좋지 않은 코드 : js에서 스타일을 건드는 것은 좋지 않다.
    // selectList.style.display = "none";
    // toggle = false;
})