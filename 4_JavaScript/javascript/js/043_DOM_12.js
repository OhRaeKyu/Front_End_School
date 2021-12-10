const parent = document.querySelector(".parent");

parent.addEventListener("click", function(event) {
    console.log(this);
    console.log(event.currentTarget);
});

// 화살표 함수에서 this는 상위(부모) 스코프를 참조한다.
parent.addEventListener("click", (event) => {
    console.log(this);
});