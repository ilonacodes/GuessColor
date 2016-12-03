describe("guess color", function () {
    it("is unknown message when user enters unknown color ", function () {
        window.prompt = function () {
            return "qwert";
        }
    }); 
});