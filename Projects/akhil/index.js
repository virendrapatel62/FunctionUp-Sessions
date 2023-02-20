const { faker } = require("@faker-js/faker");

console.log(Object.keys(faker));

console.log(Object.keys(faker["address"]));

const zipcode = Object.keys(faker["address"]);

const state = faker["address"]["state"];

console.log(state());
