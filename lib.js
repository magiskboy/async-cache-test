class CacheValue {
  /**
   * @param {any} value
   * @param {number} aliveTime - alive time in miliseconds
   */
  constructor(value, aliveTime) {
    this.value = value;
    this.expiredAt = Date.now() + aliveTime;
  }

  /**
   * @returns {boolean}
   */
  get isValid() {
    return Date.now() < this.expiredAt;
  }
}

class CustomCache {
  constructor() {
    /**
     * @type {Map<string, CacheValue>}
     */
    this.store = new Map();
  }

  /**
   * @param {string} key
   * @returns {CacheValue | undefined}
   */
  get(key) {
    return this.store.get(key);
  }

  /**
   * @param {string} key
   * @param {any} value
   * @param {number} aliveTime - time in miliseconds
   */
  set(key, value, aliveTime = 2000) {
    const cachedValue = new CacheValue(value, aliveTime);
    this.store.set(key, cachedValue);
  }
}

/**
 * @param {number} ms miliseconds
 */
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

cache = new CustomCache();

module.exports = {
  CacheValue,
  cache,
  sleep,
};
