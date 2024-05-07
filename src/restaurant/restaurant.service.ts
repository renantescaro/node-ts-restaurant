import { Injectable } from '@nestjs/common'

@Injectable()
export class RestaurantService {
	getList() {
		return [
			{
				name: 'Restaurante de Vó',
				products: [
					{
						name: 'marmita pequena',
						price: 15.0,
						image: 'https://via.placeholder.com/150',
					},
					{
						name: 'marmita média',
						price: 20.0,
						image: 'https://via.placeholder.com/150',
					},
					{
						name: 'marmita grande',
						price: 25.0,
						image: 'https://via.placeholder.com/150',
					},
				],
			},
			{
				name: 'Café Bistro',
				products: [
					{ name: 'café Gelado', price: 10.0, image: 'https://via.placeholder.com/150' },
					{ name: 'pão de queijo', price: 5.0, image: 'https://via.placeholder.com/150' },
					{
						name: 'suco de laranja',
						price: 10.0,
						image: 'https://via.placeholder.com/150',
					},
				],
			},
			{
				name: 'Só Filé',
				products: [
					{
						name: 'filé de frango',
						price: 10.0,
						image: 'https://via.placeholder.com/150',
					},
					{
						name: 'file de tilapia',
						price: 10.0,
						image: 'https://via.placeholder.com/150',
					},
					{
						name: 'file de magnolia',
						price: 10.0,
						image: 'https://via.placeholder.com/150',
					},
				],
			},
		]
	}
}
