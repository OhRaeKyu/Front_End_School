const btnFirst = document.querySelector(".btn-first");
btnFirst.addEventListener("click", (event) => {
    console.log(event);
});

btnFirst.addEventListener("click", function() {
    console.log("clicked");
})