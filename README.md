###### Angular CLI v10.0.2

# Hướng dẫn sử dụng

**Bước 1:** Lần đâu tiên clone source vê, ta cần bật `Terminal` tại thư mục `root` và chạy lệnh `npm install` hoặc `yarn install` để cài đặt các modules được sử dụng trong **source code**.

**Bước 2:** Bật `Terminal` tại thư mục `propjects/backend` và chạy lệnh `npm install` hoặc `yarn install` để cài đặt các modules được sử dụng trong project Backend-API.

**Bước 3:** Bật `Terminal` tại thư mục `root` và chạy lên `npm start` hoặc `yarn start` để khởi chạy tất cả các project.

  - project Backend-API chạy trên port `:4100`
  - project Admin chạy trên port `:4200`
  - project CNTT chạy trên port `:4300`
  - project Elearning chạy trên port `:4400`

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

# Structure & Generate

Xem chi tiết tại `structure.txt`

# SCRIPT RUN

Để sử dụng các lệnh `yarn` bắt buộc phải cài đặt yarn vào máy tính của bạn. Chạy lệnh `npm i -g yarn` để cài đặt, sau đó reset lại máy tính.

Script run: `npm start` hoặc `yarn start`: start 4 project cùng 1 lúc

Script run: `npm run run-backend` hoặc `yarn run-backend`: start 1 project Backend-API

Script run: `npm run run-admin` hoặc `yarn run-admin`: start 1 project Admin

Script run: `npm run run-cntt` hoặc `yarn run-cntt`: start 1 project CNTT

Script run: `npm run run-elearning` hoặc `yarn run-elearning`: start 1 project Elearning
