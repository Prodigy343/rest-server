import dotenv from 'dotenv';
const env = dotenv.config().parsed;

export const pay = (request, response) => {
  response.send('pay endpoint');
};