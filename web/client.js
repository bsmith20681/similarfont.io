const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "vg6wwodk",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});
