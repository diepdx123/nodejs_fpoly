# nodejs_fpoly
1.cài đặt môi trường
  - npm i express (framework express)
  - npm i vite-plugin-node -D (sử dụng các module nodejs trong js khi xây dựng bằng vite)
  - tạo file vite.config.js trong thư mục gốc, cấu hình vite(https://www.npmjs.com/package/vite-plugin-node) 
  - tạo file ./src/app.js
  - trong file vite.config.js thêm đường dẫn file app vừa tạo vào appPath: appPath: “./src/app.js” 
  - trong file app.js tạo một ứng dụng express và xuất ra như một module
  - import express from “express”
  - const app = express
  - app.get(“./products”, (req,res) => {
  - console.log(“GET/products”)
    });
  - export const viteNodeApp = app;
    !!! khi chạy npm run dev để chạy. phần scripts trong package.json sẽ chạy đầu tiên. cần sửa lại thành “scripts:" {“dev” : “vite”}; để phù hợp với câu lệnh chạy
2. router
  - tạo một middleware để xử lí dữ liệu từ json (khi gửi yêu cầu dạng json từ client thuộc tính req.body sẽ có dạng undefined do express không hiểu được dữ liệu       json )

    app.use(express.json());

3. Cấu trúc thư mục

   -Tạo  3 file product.js trong controller module routers
trong module
  ~ tạo đối tượng router từ express :  const router = express.Router();
  (khi gửi yêu cầu get, post, put,... sẽ gọi hàm getProducts từ bên controller)
  tạo hàm xử lí trong products/controller
  trong app.js tạo middleware để khi gọi api sẽ tự chuyển sang cho router xử lí:
  app.use(“/api”, productsRouter);

4.Kết nối cơ sở dữ liệu(MongoDb)
  - npm i mongoose
  - npm i morgan (ghi lại thông tin các yêu cầu HTTP: app.use(morgan(“dev”))
  - tạo file db.js/config/src để kết nối đến database
  - npm i dovent(quản lí các mã nguồn dễ hơn)
  - tạo file .env (DB_URI = mongodb://localhost:27017/WD18330) (mặc định mongodb sử dụng cổng 27017)
    trong file app.js
  - connect đến db: connectDB(process.env.DB_URI)

  - tạo file product.js/module: định nghĩa mô hình Product trong cơ sở dữ liệu dùng để tương tác với bảng(collection) products trong cơ sở dữ liệu MongoDB
    Xây dựng các hàm cần thiết trong controller

! Khi trong các hàm có các điều kiện giống nhau dẫn đến gửi phản hồi lại nhiều lần dẫn đến lỗi "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
5. Đăng kí tài khoản
  - Định nghĩa schema cho cho đối tượng người dùng trong cơ sở dữ liệu MongoDB (user/Module/src)
  - Sử dụng thư viện Joi để kiểm tra dữ liệu trong quá trình đăng kí(auth/schema/src)
  - Tạo router cho auth (auth/routers)
  - Tạo middleware goi api trong app.js(app.use(“/api”,authRouter))
  - tạo controller cho auth(auth/controller)
      + lấy dữ liệu từ user gửi lên
      + kiểm tra dữ liệu có hợp lệ không
      + kiểm tra xem tài khoản tồn tại chưa
      + mã hóa mật khẩu
      + lưu vào database
      + trả thông tin về cho người dùng(user.password = undefined)
