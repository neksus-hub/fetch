"use strict";

const getData = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      sendData(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify(data)
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

const sendData = (url, user) => {
  return fetch(url, {
    method: "POST",
    body: user,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

getData();
