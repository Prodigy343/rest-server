import express from 'express';

const app = express();

app.listen( 3000, () => console.log(`Server live at port 3000`) );

module.exports = app;