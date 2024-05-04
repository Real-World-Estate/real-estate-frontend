import { pictures } from '..';

export const data = [
	{
		id: 'our-hotels',
		category: 'hotels',
		photos: [
			pictures.hotel1,
			pictures.hotel2,
			pictures.hotel3,
			pictures.hotel4,
			pictures.hotel5,
			pictures.pool,
			pictures.room1,
			pictures.room2,
			pictures.room4,
			pictures.room5,
			pictures.bath1,
			pictures.bath2,
      pictures.bath3
		],
		description: [],
		statistics: {
			rooms: 5,
			pool: '2X8m',
			parking: 2,
			bathrooms: 4,
		},
	},
	{
		id: 'our-apartments',
		category: 'apartments',
		photos: [pictures.room5, pictures.parlor2, pictures.bath4, pictures.kitchen1, pictures.room9, pictures.room12, pictures.parlor1, pictures.kitchen, pictures.bath],
		description: [],
		statistics: {
			rooms: 2,
			bathrooms: 2,
			furnished: true,
			balcony: 2,
			kitchen: 1,
		},
	},
	{
		id: 'our-bungalows',
		category: 'bungalows',
		photos: [pictures.room3, pictures.bungalow1, pictures.bungalow2, pictures.bungalow3, pictures.bungalow4, pictures.bungalow5],
		description: [],
		statistics: {
			rooms: 5,
			parking: 1,
			bathrooms: 3,
			furnished: false,
		},
	},
	{
		id: 'our-stores',
		category: 'stores',
		photos: [],
		description: [],
		statistics: {
			rooms: 5,
			pool: '2X8m',
			parking: 2,
			bathrooms: 4,
			furnished: true,
			kitchen: 1,
		},
	},
];
