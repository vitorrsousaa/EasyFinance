import { stripe } from '../../../../services/stripe';

export default async function CreateCheckoutSession() {
  const prices = await stripe.prices.list();
  const priceId = prices.data[0].id;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.FRONT_URL}/?success=true`,
    cancel_url: `${process.env.FRONT_URL}/?canceled=true`,
  });

  const { amount_total, cancel_url, success_url, url } = session;

  return {
    amount_total, cancel_url, success_url, url
  };
}
