describe("guess color", function () {
    var storedMessage;
    window.alert = function (message) {
        storedMessage = message;
    };

    it("is unknown message when user enters unknown color ", function () {
        var result = checkUserGuess("qwerty", 3, 0);

        expect(storedMessage).toEqual("I do not recognize that color!");
        expect(result).toEqual(true);
    });

    it("is message when user enters color that alphabetically higher than computer's color", function () {
        var result = checkUserGuess("black", 2, 0);

        expect(storedMessage).toEqual("Your input alphabetically higher than mine!");
        expect(result).toEqual(true);
    });

    it("is message when user enters color that alphabetically lower than computer's color", function () {
        var result = checkUserGuess("green", 4, 0);

        expect(storedMessage).toEqual("Your input alphabetically lower than mine!");
        expect(result).toEqual(true);
    });

    it("is message when user enters color that alphabetically lower than computer's color", function () {
        var element = {style: {background: ""}};
        window.query = function (tagName) {
            return element;
        };

        var result = checkUserGuess("green", 1, 42);

        expect(storedMessage).toEqual("You are right! You took " + 42 + " guesses!");
        expect(element.style.background).toEqual("green");
        expect(result).toEqual(false);
    });

    it("stops asking for color when user has entered the right one", function () {
        var storedPromptMessage;
        var countPrompt = 0;
        window.prompt = function (message) {
            storedPromptMessage = message;
            var userInput = colors[countPrompt];
            countPrompt++;
            return userInput;
        };

        window.randomColor = function () {
            return 3;
        };

        game();

        expect(storedPromptMessage).toEqual("I am thinking of one of colors\n\n" +
            "black,blue,green,red,white,yellow\n\n" +
            "What color am I thinking of?");
        expect(countPrompt).toEqual(4);
        expect(storedMessage).toEqual("You are right! You took " + 4 + " guesses!");
    });
});