import {sub}    from './sub';

test('properly subtracting two numbers', () => {
    expect(
        sub(1, 2)
    ).toBe(-1);
})