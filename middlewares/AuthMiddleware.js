import { tokenDecode } from "../utility/TokenUtils.js";

export default (req, res, next) => {
  let token = req.headers.token;
  let decoded = tokenDecode(token);

  if (!decoded) {
    return res.status(401).json({
      status: "Faild",
      message: "Invalid token",
    });
  }

  // set cookie for refesh token
  const options = {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  res.cookie("Token", decoded.refreshToken, options);

  //set email to reqHeaders
  let email = decoded.email;
  req.headers.email = email;
  next();
};
