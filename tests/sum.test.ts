function sum(a: number, b: number) {
	return a + b
}

describe('sum', () => {
	test('sums two numbers', () => {
		expect(sum(1, 2)).toBe(3)
	})
})
