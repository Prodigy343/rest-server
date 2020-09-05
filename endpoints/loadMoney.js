import dotenv from 'dotenv';
const env = dotenv.config().parsed;

export const loadMoney = (request, response) => {
  response.send('load money endpoint');
};