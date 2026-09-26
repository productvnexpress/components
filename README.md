# Components — internal shadcn registry

Thư viện component dùng chung cho các dự án Next.js/React + Tailwind + shadcn/ui,
phân phối theo mô hình **shadcn custom registry** (copy-code, không phải npm package).

- **1299 component**, chia trong **87 category** (`hero/`, `navbar/`, `footer/`, `pricing/`, ...).
- Mỗi component có 2 file trong thư mục category của nó:
  - `<name>.tsx` — source code chính, để đọc/diff dễ dàng.
  - `<name>.json` — registry item chuẩn shadcn (`registry-item.json`), chứa đầy đủ
    nội dung file + `dependencies` / `registryDependencies`.
- `registry.json` (root) và `public/r/<name>.json` — **build artifact**, không commit vào
  git (`.gitignore`), được sinh lại tự động bởi GitHub Actions mỗi khi push lên `main` và
  publish lên GitHub Pages.

Repo: https://github.com/productvnexpress/components
Registry URL sau khi Pages deploy xong: `https://productvnexpress.github.io/components/r/{name}.json`

## Cách dùng trong một dự án khác

Trong dự án đích (đã có `components.json` của shadcn/ui), cài trực tiếp một component:

```bash
npx shadcn add https://productvnexpress.github.io/components/r/navbar9.json
```

hoặc khai báo alias registry một lần trong `components.json` của dự án đích:

```json
{
  "registries": {
    "@components": "https://productvnexpress.github.io/components/r/{name}.json"
  }
}
```

rồi cài bằng tên ngắn:

```bash
npx shadcn add @components/navbar9
```

shadcn CLI tự cài `dependencies` (npm packages) và `registryDependencies`
(các block/ui khác của chính shadcn/ui, ví dụ `button`, `accordion`) cần thiết.

## Thêm / sửa component

1. Thêm/sửa `<category>/<name>.tsx`.
2. Cập nhật `<category>/<name>.json` tương ứng (giữ đúng schema
   `https://ui.shadcn.com/schema/registry-item.json`): `name`, `title`, `description`,
   `dependencies`, `registryDependencies`, và `files[].content` khớp với `.tsx`.
3. Commit và push lên `main`. GitHub Actions ([.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml))
   tự chạy `npm run build` và publish thư mục `public/` lên GitHub Pages — không cần
   build/deploy thủ công.

   Muốn kiểm tra trước khi push, chạy local:

   ```bash
   npm run build
   ```

   Lệnh này quét toàn bộ `<category>/*.json`, báo lỗi nếu thiếu field, rồi ghi ra
   `registry.json` (manifest) và `public/r/*.json` (bản phẳng để host).

## Việc còn cần làm (đề xuất, chưa thực hiện)

- **Chuẩn hoá README từng category**: một số README con hiện là text tiếng Nga do
  scraper tạo, nên viết lại thống nhất một ngôn ngữ.
- **Kiểm tra trùng lặp/chất lượng**: một số biến thể trong cùng category có thể gần
  giống nhau, nên rà soát và loại bớt bản trùng khi có thời gian.
