describe("클릭 이벤트 처리 및 뷰를 담당하는 함수입니다.", () => {
    // dependency injection (의존 주입)
    let textManager, viewerElement, btnElement, inputText, viewManager;
    beforeEach(() => {
        textManager = new TextManager();
        viewerElement = document.createElement("strong");
        btnElement = document.createElement("button");
        inputText = document.createElement("input");

        viewManager = new ViewManager(textManager, {viewerElement, btnElement, inputText});
    })

    it("viewManager에 인자가 잘 전달 되었는지 확인합니다.", () => {
        const textManager = null;
        const btnElement = null;
        const viewerElement = null;
        const inputText = null;

        // 인자가 전달되는지 확인하는 함수
        const actual = () => new ViewManager(textManager, { btnElement, viewerElement, inputText });

        expect(actual).toThrowError();
    })

    it("click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.", () => {
        // spyOn : 특정한 모듈의 함수를 감지한다.
        spyOn(viewManager, "changeValue");
        btnElement.click();
        // toHaveBeenCalled : 함수가 호출된 적 있는지 판별한다.
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    it("updateVziew 함수를 실햅합니다.", () => {
        spyOn(viewManager, "updateValue");
        viewManager.changeValue();
        // toHaveBeenCalled : 함수가 호출된 적 있는지 판별한다.
        expect(viewManager.updateValue).toHaveBeenCalled();
    })
})