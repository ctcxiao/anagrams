const main = require('../main/main');

describe('main()', () => {

    it('should return the letter when letter is only one', function () {
        let input = "a";
        let actualText = "a";
        let expectText = main.main(input);
        expect(actualText).toBe(expectText);
    });

});