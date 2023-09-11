//data
//time exits
import jwt from "jsonwebtoken";

const SECRET_KEY = "kien242";
const EXPIRED_TIME = 1000;
const generateToken = (data) => {
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: EXPIRED_TIME });
  return token;
};

const verityToken = (token) => {
  const verity = jwt.verify(token, SECRET_KEY);
};

export { verityToken, generateToken };
