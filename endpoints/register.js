import dotenv from 'dotenv';
const env = dotenv.config().parsed;

export const register = (request, response) => {
  response.send('register endpoint');
};