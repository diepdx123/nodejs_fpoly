import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().required().trim().messages({
    "any.required": "Username la bat buoc",
    "sring.empty": "Username khong duoc de trong",
    "string.trim": "username khong duoc chua khoang trang",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "email la bat buoc",
    "string.email": "email khong hop le",
    "string.empty": "email khong duoc de trong",
  }),
  password: Joi.string().required().min(6).messages({
    "any.required": "password la bat buoc",
    "string.min": "password phai co it nhat {#limit} ky tu",
    "string.empty": "password khong duoc de trong",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": "Confirm password la bat buoc",
    "string.only": "Mat khau khong trung khop",
    "string.empty": "password khong duoc de trong",
  }),
  age: Joi.number().max(100).message({
    "number.max": "Tuoi khong hop le",
  }),
});
