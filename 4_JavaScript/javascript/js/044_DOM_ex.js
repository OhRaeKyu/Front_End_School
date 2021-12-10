const selectBtn = document.querySelector(".btn-select");
const selectList = document.querySelector(".list-member");

selectBtn.addEventListener("click", function() {
    selectList.style.display = "block";
    selectList.innerHTML = `<li><button type="button">Python</button></li>
    <li><button type="button">Java</button></li>
    <li><button type="button">JavaScript</button></li>
    <li><button type="button">C#</button></li>
    <li><button type="button">C/C++</button></li>`;

});

selectList.addEventListener("click", function(event) {
    selectList.style.display = "none";
    selectBtn.innerText = event.target.innerText;
})