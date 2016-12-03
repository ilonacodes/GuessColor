describe("guess color", function () {
    var storedMessage;
    it("is unknown message when user enters unknown color ", function () {
        window.alert = function (message) {
          storedMessage = message;
        };

        var result = checkUserGuess("qwerty", 3, 0);

        expect(storedMessage).toEqual("I do not recognize that color!");
        expect(result).toEqual(true);
    });

    it("is message when user enters color that alphabetically higher than computer's color", function () {
        window.alert = function (message) {
            storedMessage = message;
        };

        var result = checkUserGuess("black", 2, 0);

        expect(storedMessage).toEqual("Your input alphabetically higher than mine!");
        expect(result).toEqual(true);
    });

    it("is message when user enters color that alphabetically lower than computer's color", function () {
        window.alert = function (message) {
            storedMessage = message;
        };

        var result = checkUserGuess("green", 4, 0);

        expect(storedMessage).toEqual("Your input alphabetically lower than mine!");
        expect(result).toEqual(true);
    });

    it("is message when user enters color that alphabetically lower than computer's color", function () {
        window.alert = function (message) {
            storedMessage = message;
        };

        var element = {style: {background: ""}};
        window.query = function (tagName) {
            return element;
        };

        var result = checkUserGuess("green", 1, 42);

        expect(storedMessage).toEqual("You are right! You took " + 42 + " guesses!");
        expect(element.style.background).toEqual("green");
        expect(result).toEqual(false);
    });

});