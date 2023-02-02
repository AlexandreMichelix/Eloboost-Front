import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}) {
    let stripePromise = null;

    const getStripe = () => {
        if(!stripePromise) {
            stripePromise = loadStripe("pk_test_51MWk3PAwL4pxGCAgUYafUrZqfG8e46bgRWbRPf9FbQbu82GQCw6GzueR9p42ULw240toNtNvTLv2TEtj1bGoEYhs00U9Kss4Av");
        }
        return stripePromise;
    }

    const stripe = await getStripe();

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })

}