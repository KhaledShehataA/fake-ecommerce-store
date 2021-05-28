import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';

export const ProductList = () => {
	const products = useSelector((state) => state);
	console.log(products);
	return (
		<div className='ui grid container'>
			<Product />
		</div>
	);
};
