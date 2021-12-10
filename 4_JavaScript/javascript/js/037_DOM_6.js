const sayHi = document.querySelector(".sayHi");
sayHi.insertAdjacentHTML("beforebegin", "<span>안녕하세요 저는</span>");
sayHi.insertAdjacentHTML("afterbegin", "<span>오래규입니다.</span>");
sayHi.insertAdjacentHTML("beforeend", "<span>프론트엔드 개발자가</span>");
sayHi.insertAdjacentHTML("afterend", "<span>되고싶습니다.</span>");