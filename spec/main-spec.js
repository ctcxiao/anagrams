const main = require('../main/main');

describe('main()', () => {

    it('should return the letter when letter is only one', function () {
        let input = "a";
        let actualText = "a";
        let expectText = main.main(input);
        expect(actualText).toBe(expectText);
    });

    it('should return all letter group when give two letter', function () {
        let input = "ab";
        let actualText = "ba ab";
        let expectText = main.main(input);
        expect(actualText).toBe(expectText);
    });

    it('should return all letter group when give three letter', function () {
        let input = "abc";
        let actualText = "cba bca bac cab acb abc";
        let expectText = main.main(input);
        expect(actualText).toBe(expectText);
    });

    it('should return all letter group when give four letter', function () {
        let input = "biro";
        let expectText = main.main(input);
        expect(24).toBe(expectText.split(" ").length);
    });

});