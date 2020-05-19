import React, { useContext } from 'react';
import { GlobalContext } from '../context/Global';
import { numberWithCommas } from '../utils/format';

export default function Balance() {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<div>
			<h1>${numberWithCommas(total)}</h1>
		</div>
	);
}
