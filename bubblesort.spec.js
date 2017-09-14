describe('Bubble Sort', function () {


    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });
    it('handles an array with one element', function () {
        expect(bubbleSort([1])).toEqual([1]);

    });
    it('handles an array with several elements', function () {
        expect(bubbleSort([5, 3, 7, 9, 1])).toEqual([1, 3, 5, 7, 9]);

    });
    it('handles negative numbers', function () {
        expect(bubbleSort([-2, -4, 5, 3, 1, -6])).toEqual([-6, -4, -2, 1, 3, 5]);

    });
    it('handles repeating numbers', function () {
        expect(bubbleSort([5, 3, 5, 3, 1, 3])).toEqual([1, 3, 3, 3, 5, 5]);

    });
});
describe('Bubble Sort Counter', function () {
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough();
    });
    it('getting to the center of tootsiepop involves exactly three licks', function () {
        bubbleSort([5, 3, 7, 9, 1]);
        expect(window.swap.calls.count()).toEqual(5);
    });
});