"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
const values = Object.values(user);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], ":", values[i]);
}
