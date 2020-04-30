"use strict";

const countProps = function (obj) {
  const values = Object.values(obj);
  const count = values.length;
  return count;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
