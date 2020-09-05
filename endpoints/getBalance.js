import dotenv from 'dotenv';
const env = dotenv.config().parsed;
export const getBalance = (request, response) => {
  response.send('balance endpoint');
};