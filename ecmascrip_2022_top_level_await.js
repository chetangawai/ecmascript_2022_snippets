
/*****************************************************************************
                    ECMAScript 2022 top-level await
******************************************************************************/


//server.mjs 

import express from 'express';
import { users } from './users.mjs';

var app = express();

var PORT = 3000;

app.get('/', function (req, res) {
  console.log(users); //Displays users list
  res.send('Users');
});

app.listen(PORT, function () {
  console.log('Server is running on PORT:', PORT);
});

/* **************************************************************************** */

//users.mjs

import fetch from "node-fetch";

/********************** Making function async **************************/

let users;
export const fetchUsers = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  users = resp.json();
}
fetchUsers();
export { users };


/**************************** Using IIFE ******************************/

// let users;
// (async () => {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//   users =  resp.json();
// })();

// export { users };


/************************ Using top level await **********************/

// const resp = await fetch('https://jsonplaceholder.typicode.com/users');
// const users = resp.json();
// export { users };