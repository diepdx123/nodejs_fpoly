import User from "../module/user";
import { registerSchema } from "../schemas/auth";

import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  // lay du lieu tu user gui len
  const { username, password, confirmPassword, email, age } = req.body;

  // kiem tra du lieu co hop le khong
  const { error } = registerSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const messages = error.details.map((message) => message.message);
    return res.status(400).json({
      messages,
    });
  }

  // kiem tra user da ton tai hay chua
  const exisUser = await User.findOne({ email });
  if (exisUser) {
    return res.status(400).json({
      messages: ["email da ton tai!"],
    });
  }
  // ma hoa mat khau (su dung bcryptjs, su dung await de dam bao rang co the in ra psw(console.log) da ma hoa thay vi mot Promise)
  const hashedPassword = await bcryptjs.hash(password, 10);

  // luu user vao database
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    age,
  });

  // tra ve thong tin user da dang ki(khong gui ve mat khau)
  user.password = undefined;
  return res.status(201).json({
    user,
  });
};
