const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "vg6wwodk",
  dataset: "production",
  useCdn: true,
});
