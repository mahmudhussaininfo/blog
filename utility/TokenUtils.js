import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";
import JWT from "jsonwebtoken";

//encode token
export const tokenEncode = async (email) => {
  const payload = { email };
  const key = JWT_KEY;
  const expire = { expiresIn: JWT_EXPIRE_TIME };
  return JWT.sign(payload, key, expire);
};

//decode token
export const tokenDecode = (token) => {
  try {
    const key = JWT_KEY;
    const expire = { expiresIn: JWT_EXPIRE_TIME };
    const decode = JWT.verify(token, key);

    if (decode.email) {
      const refreshToken = JWT.sign(
        {
          email: decode.email,
        },
        key,
        expire
      );
      return {
        email: decode.email,
        refreshToken,
      };
    }
  } catch (error) {
    return null;
  }
};
