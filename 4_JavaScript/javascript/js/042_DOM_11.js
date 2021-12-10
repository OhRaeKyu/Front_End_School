// const parent = document.querySelector('.parent');
// parent.addEventListener('click', function (event) {
//     console.log(event.target);
//     if (event.target.nodename === "BUTTON") {
//         event.target.innerText = "버튼 4";
//     }
// })

const parent = document.querySelector(".parent");
parent.addEventListener("click", function(event) {
    console.log(event.target);
    if (event.target.nodeName === "BUTTON") {
        event.target.innerText = "버튼 4";
    }
})