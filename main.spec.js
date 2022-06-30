const lib = require("./lib");
const { getProductWithCached } = require("./main");

beforeEach(() => {
  lib.cache.store.clear();
});

it("getProductWithCached new product", async () => {
  const productId = 1;
  const fetcher = jest.fn(async (id) => id);
  const product = await getProductWithCached(productId, fetcher);
  expect(product).toEqual(product, { id: productId });
  expect(fetcher).toHaveBeenCalledTimes(1);
});

it("getProductWith cached product", async () => {
  const productId = 1;
  const fetcher = jest.fn(async (id) => id);

  await Promise.all([
    getProductWithCached(productId, fetcher),
    getProductWithCached(productId, fetcher),
  ]);

  expect(fetcher).toHaveBeenCalledTimes(1);
});

it("getProductWithCached with invalid cached product and fetchProduct is failed", async () => {
  const productId = 1;
  const fetcher = jest
    .fn()
    .mockResolvedValueOnce({ id: productId })
    .mockRejectedValueOnce("Network occurs an error");

  const p1 = await getProductWithCached(1, fetcher);
  await lib.sleep(3000);
  const p2 = await getProductWithCached(1, fetcher);

  expect(fetcher).toHaveBeenCalledTimes(2);
  expect(p1).toBe(p2);
});

it("getProductWithCached with first fetching is failed", async () => {
  const productId = 1;
  const fetcher = jest.fn().mockRejectedValueOnce("Network occurs an error");

  const p = await getProductWithCached(productId, fetcher);

  expect(fetcher).toHaveBeenCalledTimes(1);
  expect(p).toEqual(undefined);
});
