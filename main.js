const lib = require("./lib");

/**
 * @param {number} id
 * @param {(number) => Promise<import('./lib').CacheValue>} fetcher
 * @typedef {Object} Product
 * @property {number} id
 * @returns {Promise<Product>|undefined}
 */
async function getProductWithCached(id, fetcher) {
  // code is here
}

module.exports = {
  getProductWithCached,
};
