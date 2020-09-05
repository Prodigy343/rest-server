import dotenv from 'dotenv';
const env = dotenv.config().parsed;

export const confirmPayment = (request, response) => {
  response.send('confirm endpoint');
};