"use strict";

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  let maxValues = 0;
  let keyNumber;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > maxValues) {
      maxValues = values[i];
      keyNumber = i;
    }
  }
  return keys[keyNumber];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
