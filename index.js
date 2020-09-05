import * as controllers from './endpoints';
import express from 'express';

const app = express();

const endpoints = [
  {path: '/pay', controller: controllers.pay, type: 'get'},
  {path: '/register', controller: controllers.register, type: 'post'},
  {path: '/loadMoney', controller: controllers.loadMoney, type: 'get'},
  {path: '/getBalance', controller: controllers.getBalance, type: 'get'},
  {path: '/confirmPayment', controller: controllers.confirmPayment, type: 'post'},
];

endpoints.forEach(endpoint => {
  switch (endpoint.type) {
    case 'post':
      app.post(endpoint.path, endpoint.controller);
    break;

    case 'put':
      app.put(endpoint.path, endpoint.controller);
    break;

    case 'delete':
      app.delete(endpoint.path, endpoint.controller);
    break;
  
    default:
      app.get(endpoint.path, endpoint.controller);
    break;
  }
});

app.listen( 3000, () => console.log(`Server live at port 3000`) );

module.exports = app;