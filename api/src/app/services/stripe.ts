import { Stripe } from 'stripe';
import * as dotenv from 'dotenv';
dotenv.config();

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY : '',
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Aion',
      version: '0.1.0',
    },
  }
);
