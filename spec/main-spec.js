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
        let actualText = "ab,ba";
        let expectText = main.main(input);
        expect(actualText).toBe(expectText);
    });

});