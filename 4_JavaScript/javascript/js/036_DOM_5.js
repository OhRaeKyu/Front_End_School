const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener('click', function(){
	myP.textContent = myInput.value;
});

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener('input', ()=>{
  myP.textContent = myInput.value;
});

myP.innerHTML = "<strong class='txt-class' >I'm Strong!!</strong>";
// myP.innerText = "<strong>I'm Strong!!</strong>";
// myP.textContent = "<strong>I'm Strong!!</strong>";
// myP.outerHTML = "<div></div>";

// innerHTML 은 요소(element) 내에 포함 된 HTML 마크업을 가져오거나 설정합니다.
// innerText 속성은 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타냅니다. (innerText는 "사람이 읽을 수 있는" 요소만 처리합니다.)
// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다.