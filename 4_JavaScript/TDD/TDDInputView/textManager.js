const TextManager = (() => {
    let value = {
        data: "Hello Lions!"
    };

    function innerTextManager() { }

    innerTextManager.prototype.getValue = function () {
        return value.data;
    }

    innerTextManager.prototype.setValue = function (newValue) {
        value = newValue;
    }

    return innerTextManager;
})();