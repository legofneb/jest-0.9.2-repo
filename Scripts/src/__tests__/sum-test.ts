jest.dontMock('../sum');

import { sum } from '../sum';

describe('sum', () => {
    it('should add numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });
});