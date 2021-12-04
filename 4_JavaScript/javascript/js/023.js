// DOM 제어 명령어 .addEventListener(EventType, listener)
// 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지합니다.
// listener 함수의 인수에는 이벤트에 대한 정보가 담겨있습니다.

const myBtn = document.querySelector("button");

myBtn.addEventListener("click", function () {
    console.log("Click");
    // 클래스 제어 명령어
	// myBtn.classList.add("blue");     //클래스를 추가한다.
	// myBtn.classList.remove("blue");     //클래스를 제거한다.
	myBtn.classList.toggle("blue");     //클래스를 토글한다.
	console.log(myBtn.classList.contains("blue"));   //해당하는 클래스가 있는지 확인한다.
})

myBtn.addEventListener("mouseover", function () {
    console.log("Mouse Over");
})

myBtn.addEventListener("mouseout", function () {
    console.log("Mouse Out");
})

myBtn.addEventListener("wheel", function () {
    console.log("Wheel");
})