const authResolver = require("./auth");
const eventResolver = require("./events");
const bookingResolver = require("./booking");

const rootResolver = {
  ...authResolver,
  ...bookingResolver,
  ...eventResolver
};

module.exports = rootResolver;
