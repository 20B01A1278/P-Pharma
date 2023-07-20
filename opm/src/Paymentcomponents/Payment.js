import { useState } from 'react';
import './Payment.css';
import { finalamount } from '../Deliveryadd';
import StripeContainer from './StripeContainer';

function Payment() {
	
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='pay'>
			<h1 >The  Store</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>{finalamount}</h3>
					<button onClick={() => setShowItem(true)}>Proceed to Buy</button>
				</>
			)}
		</div>
	);
}

export default Payment;


