function ViewManager(textManager, options) {
    if(!textManager || !options.btnElement || !options.viewerElement || !options.inputText) {
        // throw : 사용자 정의 예외를 만들고 프로그램을 종료한다.
        throw Error("전달인자 중에 빈 값이 존재합니다.");
    }

    this.textManager = textManager;
    this.inputText = options.inputText;
    this.viewerElement = options.viewerElement;

    options.btnElement.addEventListener("click", () => {
        this.changeValue();
    })
}

ViewManager.prototype.changeValue = function () {
    this.textManager.setValue({data: this.inputText.value});
    this.updateValue();
}

ViewManager.prototype.updateValue = function () {
    this.viewerElement.textContent = this.textManager.getValue();
}