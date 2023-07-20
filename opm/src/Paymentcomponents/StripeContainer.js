import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51NGHhhSH7neAq9JQUdCb0lSqYnHBb4j0I7HQEry3qnmpMcPnLWQ42Fa2xFSELx0o82bVSduGyqOKZoeEZyugGFtJ00iUJsAWwp"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
