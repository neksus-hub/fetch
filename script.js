"use strict";

const getData = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      sendData(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify(data)
      );
    })
    .catch((error) => console.log(error));
};

const sendData = (url, user) => {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.response);
    }
  };

  xhr.send(user);
};

getData();
