#### Angular CLI v10.0.2

# Các modules được sử dụng trong projects
1. @fortawesome/fontawesome-free
2. @mdi/font
3. bootstrap
4. jquery
5. select2
6. swiper
7. vanilla-lazyload
8. concurrently

```
npm i @fortawesome/fontawesome-free @mdi/font bootstrap concurrently jquery select2 swiper vanilla-lazyload
```

# Generate

### Tạo 1 components chung mới

```
ng g c components/<Đối tượng>/<Đối tượng + Tên component> --skipTests=true
```

VD:

```
ng g c components/modal/ModalDiemsinhvien --skipTests=true
```

### Tạo 1 page mới

```
ng g c pages/<Page + Tên page> --skipTests=true
```

VD:

```
ng g c pages/PageTintuc --skipTests=true
```

Khi đã tạo Page components, ta sẽ thêm router vào file `app-routing.module.ts` ở thư mục `app` 

Thêm thuộc tính `routerLink` vào thẻ `<a>` để có vào truy cập được Page đó trên trình duyệt.

VD: `<a routerLink="/chuongtrinhdaotao" routerLinkActive="active">`

**Lưu ý:** Khi thêm router vào file `app-routing.module.ts` bắt buộc phải ***import*** PageComponents đó.