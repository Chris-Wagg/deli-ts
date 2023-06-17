import prisma from '../client'
import { prismaMock } from '../singleton'

interface CreateMenuItem {
	id: string
	breakfastItem: string
	price: number
}

async function createMenuItem(item: CreateMenuItem) {
	if (item.breakfastItem === 'string') {
		return await prisma.breakfastMenu.create({ data: item })
	} else {
		return new Error('bad string')
	}
}

test('tests creating menu item', async () => {
	const breakfastMenu = {
		id: '1',
		breakfastItem: 'testItem',
		price: 123,
	}

	prismaMock.breakfastMenu.create.mockResolvedValue(breakfastMenu)

	await expect(createMenuItem(breakfastMenu)).resolves.toEqual({
		id: '1',
		breakfastItem: 'testItem',
		price: 123,
	})
})
