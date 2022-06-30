# Async cache

### Mô tả

Thực hiện cài đặt hàm `getProductWithCached` thỏa mãn điều kiện:

- Cache kết quả từ hàm `fetcher` với nhiều lần gọi
- Nếu hết thời gian cache, gọi lại fetcher để lấy kết quả mới nhất. Nếu lời gọi fetcher này bị lỗi, trả về cache cũ

**Lưu ý: chỉ code trong file main.js**

```sh
# npm run test
```
