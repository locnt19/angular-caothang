###### Angular CLI v10.0.2

# Hướng dẫn sử dụng

**Bước 1:** Lần đâu tiên clone source vê, ta cần bật `Terminal` tại thư mục `root` và chạy lên `npm install` hoặc `yarn install` để cài đặt các modules được sử dụng trong **source code**.

**Bước 2:** Bật `Terminal` tại thư mục `propjects/backend` và chạy lên `npm install` hoặc `yarn install` để cài đặt các modules được sử dụng trong project Backend-API.

**Bước 3:** Bật `Terminal` tại thư mục `root` và chạy lên `npm start` hoặc `yarn start` để khởi chạy tất cả các project.

  - project Backend-API chạy trên port: `:4100`
  - project Admin chạy trên port: `:4200`
  - project CNTT chạy trên port: `:4300`
  - project Elearning chạy trên port: `:4400`

---

# Các modules được sử dụng

### Trong project Admin (đã được setup sẵn vào project)

1. @fortawesome/fontawesome-free@5.13.1
2. @mdi/font@5.3.45
3. bootstrap@4.5.0
4. jquery@3.5.1
5. select2@4.0.13
6. swiper@6.0.2
7. vanilla-lazyload@17.1.0

### Trong project CNTT (đã được setup sẵn vào project)

1. @fortawesome/fontawesome-free@5.13.1
2. @mdi/font@5.3.45
3. bootstrap@4.5.0
4. jquery@3.5.1
6. swiper@6.0.2
7. vanilla-lazyload@17.1.0

### Ttrong project Elearning (đã được setup sẵn vào project)

1. @fortawesome/fontawesome-free@5.13.1
2. @mdi/font@5.3.45
3. bootstrap@4.5.0
4. jquery@3.5.1

### Trong project Backend-API (Bắt buộc phải thực hiện **Bước 2** ở phần **Hướng dẫn sử dụng**)

1. body-parser@1.19.0
2. cors@2.8.5
3. express@4.17.1
4. mongoose@5.9.23

---

# Generate

### Tạo 1 components mới cho project

```
ng g c components/<Đối tượng>/<Đối tượng + Tên component> --skipTests=true --project=<Tên project>
```

VD:

```
ng g c components/modal/ModalDiemsinhvien --skipTests=true --project=admin
```

### Tạo 1 page mới

```
ng g c pages/<Page + Tên page> --skipTests=true --project=<Tên project>
```

VD:

```
ng g c pages/PageTintuc --skipTests=true --project=cntt
```

Khi đã tạo Page components, ta phải thêm router vào file `app-routing.module.ts` ở thư mục `app` 

Thêm thuộc tính `routerLink` vào thẻ `<a>` để có thể truy cập được Page đó trên trình duyệt.

VD: `<a routerLink="/chuongtrinhdaotao" routerLinkActive="active">`

**Lưu ý:** Khi thêm router vào file `app-routing.module.ts` bắt buộc phải ***import*** PageComponents đó.